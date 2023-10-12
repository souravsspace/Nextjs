"use client"

import Form from "./form"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import z from "zod"
import { ToastAction } from "@/components/ui/toast"
import { loginSchema } from "@/validation/schema.zod"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Login() {
   const router = useRouter()
   const { toast } = useToast()

   const [data, setData] = useState({
      email: "",
      password: "",
   })
   const [disabled, setDisabled] = useState(false)

   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
         setDisabled(true)
         if (!loginSchema.parse(data)) return
         signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
         })
         router.push("/")
      } catch (err) {
         setDisabled(false)
         if (err instanceof z.ZodError) {
            const errorMessages = err.errors.map((error) => error.message)
            toast({
               title: "Something went wrong",
               description: errorMessages.join("\n"),
               action: <ToastAction altText="Try again">Try Again</ToastAction>,
            })
         }
         toast({
            title: "Something went wrong",
            description: "Please check your data and try again.",
            action: <ToastAction altText="Try again">Try Again</ToastAction>,
         })
      }
      setDisabled(false)
   }
   return (
      <main className="h-screen flex items-center justify-center">
         <Form
            data={data}
            disabled={disabled}
            setData={setData}
            handleLogin={handleLogin}
         />
      </main>
   )
}
