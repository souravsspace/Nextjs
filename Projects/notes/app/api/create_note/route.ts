import prisma from "@/prisma/client"
import { createNotesSchema } from "@/validation/zod"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
   const body = await request.json()
   const { email }: { email: string } = body

   const user = await prisma.user.findUnique({
      where: { email: email },
   })
   if (!user) return NextResponse.json("User not found", { status: 400 })

   const validation = createNotesSchema.safeParse(body)
   if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 })
   }

   const userId = user.id
   const { title, description } = validation.data

   try {
      const createNote = await prisma.notes.create({
         data: {
            title: title,
            description: description,
            user: {
               connect: {
                  id: userId,
               },
            },
         },
      })
      return NextResponse.json(createNote, { status: 201 })
   } catch (error) {
      return NextResponse.json("The error is : " + error, { status: 500 })
   }
}
