import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(request: Request) {
   try {
      const body: USER = await request.json()
      const { name, email, password } = body

      const existingUser = await prisma.user.findUnique({
         where: { email },
      })

      if (existingUser) {
         return null
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = await prisma.user.create({
         data: {
            name,
            email,
            password: hashedPassword,
         },
      })

      return new NextResponse(
         JSON.stringify({
            message: "User registered successfully",
            user: newUser,
         }),
         {
            status: 201,
            headers: { "Content-Type": "application/json" },
         }
      )
   } catch (error) {
      console.error("Error during registration:", error)
      return new NextResponse(
         JSON.stringify({ message: "Internal server error" }),
         {
            status: 500,
            headers: { "Content-Type": "application/json" },
         }
      )
   } finally {
      await prisma.$disconnect()
   }
}
