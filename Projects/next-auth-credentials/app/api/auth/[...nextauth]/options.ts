import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      CredentialsProvider({
         name: "credentials",
         credentials: {
            email: {
               label: "Email:",
               type: "email",
               placeholder: "username@mail.com",
            },
            password: {
               label: "Password:",
               type: "password",
            },
         },
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) return null

            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            })
            if (!user) return null

            const isValid = await compare(credentials.password, user.password)
            if (!isValid) return null

            return user
         },
      }),
   ],
   session: {
      strategy: "jwt",
   },
   //  debug: process.env.NODE_ENV === "development",
}
