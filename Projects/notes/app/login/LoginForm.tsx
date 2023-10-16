"use client"

import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { loginSchema } from "@/validation/zod"
import { useForm } from "react-hook-form"
import {
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { formOptions } from "./formOptions"
import TheAlert from "@/components/TheAlert"
import Link from "next/link"

type USER = z.infer<typeof loginSchema>

export default function LoginForm() {
   const form = useForm()
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<USER>({
      resolver: zodResolver(loginSchema),
   })

   const onSubmit = handleSubmit((data) => {
      console.log(data)
   })

   return (
      <Form {...form}>
         <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
               Enter your information to login your account.
            </CardDescription>
         </CardHeader>
         {(errors.email || errors.password) && (
            <TheAlert
               message={errors.email?.message || errors.password?.message}
            />
         )}
         <form onSubmit={onSubmit} className="space-y-8">
            <CardContent>
               {formOptions.map(({ name, type, label, placeholder }, index) => (
                  <FormField
                     key={index}
                     control={control}
                     name={name as any}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>{label}</FormLabel>
                           <FormControl>
                              <Input
                                 type={type}
                                 className="!ring-0"
                                 placeholder={placeholder}
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               ))}
            </CardContent>
            <CardFooter className="flex justify-end gap-1">
               <Button type="button" variant="secondary">
                  <Link href="/">Back</Link>
               </Button>
               <Button type="submit">Login</Button>
            </CardFooter>
         </form>
      </Form>
   )
}
