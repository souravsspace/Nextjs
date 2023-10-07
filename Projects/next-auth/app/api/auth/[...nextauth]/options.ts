import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

type USER = {
  id: string
  username: string
  password: string
}

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "e.g. sourav",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user: USER = { id: "34", username: "sourav", password: "sourav" }
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}
