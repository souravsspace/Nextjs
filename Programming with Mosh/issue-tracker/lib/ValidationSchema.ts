import z from "zod"

export const ValidationSchema = z.object({
   title: z.string().min(5, "Title is required").max(100, "Title is too long"),
   description: z
      .string()
      .min(5, "Description is required")
      .max(255, "Description is too long"),
})
