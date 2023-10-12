import z from "zod"

const name = z
   .string()
   .min(3, {
      message: "Name must be at least 3 characters long",
   })
   .max(20, {
      message: "Name can't be more then 20 characters",
   })

const email = z
   .string()
   .email({
      message: "Please enter a valid email",
   })
   .toLowerCase()

const password = z
   .string()
   .min(8, {
      message: "Password must be at least 8 characters long",
   })
   .max(20, {
      message: "Password can't be more then 20 characters",
   })

const confirmPassword = z.string().min(8).max(20)

export const schema = z
   .object({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
   })
   .refine(
      (data) => {
         return data.password === data.confirmPassword
      },
      {
         message: "Passwords don't match",
      }
   )

export const loginSchema = z.object({
   email: email,
   password: password,
})

export type LOGIN_USER_TYPE = z.infer<typeof loginSchema>

export type USER_TYPE = z.infer<typeof schema>
