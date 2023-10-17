"use client"

import Loading from "@/components/Loading"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AllNotesOfUser() {
   const router = useRouter()
   const session = useSession()
   if (session.status === "unauthenticated") {
      router.push("/")
      return (
         <div className="flex justify-center items-center min-h-[20]">
            <Loading />
         </div>
      )
   }
   const userEmail = session.data?.user?.email
   return <div>AllNotesOfUser</div>
}
