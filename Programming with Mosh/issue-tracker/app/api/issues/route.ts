import prisma from "@/prisma/client"
import { NextResponse } from "next/server"
import z from "zod"

const createIssueSchema = z.object({
   title: z.string().min(1),
   description: z.string().min(1),
})

export async function POST(request: Request) {
   const body = await request.json()

   const validation = createIssueSchema.safeParse(body)
   if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 })
   }
   const { title, description } = validation.data

   try {
      const newIssue = await prisma.issue.create({
         data: { title: title, description: description },
      })
      return NextResponse.json(newIssue, { status: 201 })
   } catch (error) {
      return NextResponse.json("The error is - " + error, { status: 500 })
   } finally {
      await prisma.$disconnect()
   }
}
