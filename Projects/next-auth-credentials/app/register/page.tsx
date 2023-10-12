"use client"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { schema } from "@/validation/schema.zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as z from "zod"
import Form from "./form"

export default function Register() {
   const router = useRouter()
   const { toast } = useToast()

   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   })

   const [disabled, setDisabled] = useState(false)

   const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
         setDisabled(true)
         if (!schema.parse(data)) return
         const response = await fetch("/api/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         })
         try {
            await response.json()
            router.push("/login")
         } catch (err) {
            toast({
               title: "Something went wrong",
               description: "User already exists.",
               action: <ToastAction altText="Try again">Okay</ToastAction>,
            })
         }
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
            handleRegister={handleRegister}
         />
      </main>
   )
}
