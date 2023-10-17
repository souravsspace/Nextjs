"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { signOut, useSession } from "next-auth/react"

export default function NavbarButton() {
   const session = useSession()
   if (session.status === "authenticated")
      return (
         <>
            <Button onClick={() => signOut()}>Sign Out</Button>
         </>
      )
   return (
      <>
         <Button variant="secondary">
            <Link href="/register">Register</Link>
         </Button>
         <Button>
            <Link href="/login">Login</Link>
         </Button>
      </>
   )
}
