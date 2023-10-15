import prisma from "@/prisma/client"
import { NextResponse } from "next/server"
import { ValidationSchema } from "@/lib/ValidationSchema"

export async function POST(request: Request) {
   const body = await request.json()

   const validation = ValidationSchema.safeParse(body)
   if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 })
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
