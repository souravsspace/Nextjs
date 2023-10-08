"use client"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { schema } from "@/validation/schema.zod"
import { USER_TYPE } from "@/validation/schema.zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as z from "zod"
import Form from "./form"

export default function Register() {
  const router = useRouter()
  const { toast } = useToast()

  const [data, setData] = useState<USER_TYPE>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!schema.parse(data)) return
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      }
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userData }),
      })

      try {
        const userInfo = await response.json()
        console.log(userInfo)
        router.push("/login")
      } catch (err) {
        console.log("Something is wrong here", err)
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessages = err.errors.map((error) => error.message)
        toast({
          title: "Something went wrong",
          description: errorMessages.join("\n"),
          action: <ToastAction altText="Try again">Try Again</ToastAction>,
        })
      } else {
        toast({
          title: "Something went wrong",
          description: "Please check your data and try again.",
          action: <ToastAction altText="Try again">Try Again</ToastAction>,
        })
      }
    }
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <Form data={data} setData={setData} handleRegister={handleRegister} />
    </main>
  )
}
