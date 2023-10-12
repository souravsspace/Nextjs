"use client"
import { useSession } from "next-auth/react"

export default function Dashboard() {
   const { data: session, status } = useSession()
   return (
      <main className="h-screen flex items-center justify-center">
        {status === "loading" && <span className="animate-spin">🕐</span>}
        <div>
          <span>{session?.user?.name}</span>
        </div>
      </main>
   )
}
