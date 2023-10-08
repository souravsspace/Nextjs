import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
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
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SOURAV_SECRET,
  debug: process.env.NODE_ENV === "development",
}
