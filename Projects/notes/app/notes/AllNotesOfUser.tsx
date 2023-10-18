"use client"

import Loading from "@/components/Loading"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
} from "@/components/ui/card"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function AllNotesOfUser() {
   const [userNote, setUserNote] = useState<NOTE_TYPE[]>([])

   const session = useSession()
   const userId = session.data?.user?.id as string

   const fetchNotes = useCallback(async () => {
      await axios.get("/api/users_notes").then((res) => {
         const notes: NOTE_TYPE[] = res.data
         const user_note = notes.filter((note) => note.userId === userId)
         setUserNote(user_note)
      })
   }, [setUserNote, userId])

   useEffect(() => {
      fetchNotes()
   }, [fetchNotes])

   const router = useRouter()
   if (session.status === "unauthenticated") {
      router.push("/")
      return (
         <div className="flex justify-center items-center min-h-[20]">
            <Loading />
         </div>
      )
   }

   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {userNote.map((note) => (
            <Card key={note.id}>
               <CardHeader>
                  <h2 className="text-xl font-semibold">{note.title}</h2>
               </CardHeader>
               <CardContent>
                  <CardDescription>{note.description}</CardDescription>
               </CardContent>
            </Card>
         ))}
      </main>
   )
}
