"use client"

import "easymde/dist/easymde.min.css"
import SimpleMDE from "react-simplemde-editor"
import { Button, Callout, Text, TextField } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidationSchema } from "@/lib/ValidationSchema"
import z from "zod"
import TheErrors from "@/components/theErrors"

type IssueForm = z.infer<typeof ValidationSchema>

export default function NewIssuePage() {
   const router = useRouter()
   const [error, setError] = useState("")
   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<IssueForm>({
      resolver: zodResolver(ValidationSchema),
   })

   return (
      <main className="max-w-xl">
         <div className="mb-5">{error && <TheErrors error={error} />}</div>
         <form
            className="space-y-3"
            onSubmit={handleSubmit(async (data) => {
               try {
                  await axios.post("/api/issues", data)
                  router.push("/issues")
               } catch (error) {
                  setError("Something went wrong")
               }
            })}
         >
            <TextField.Root>
               <TextField.Input placeholder="Title" {...register("title")} />
            </TextField.Root>
            {errors.title && <TheErrors error={errors.title.message!} />}
            <Controller
               name="description"
               control={control}
               render={({ field }) => (
                  <SimpleMDE placeholder="Description.." {...field} />
               )}
            />
            {errors.description && (
               <TheErrors error={errors.description.message!} />
            )}
            <Button type="submit">Sumbit New Issue</Button>
         </form>
      </main>
   )
}
