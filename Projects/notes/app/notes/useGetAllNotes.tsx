import axios from "axios"
import { useState } from "react"

export async function useGetAllNotes(userId: string) {
   const [userNote, setUserNote] = useState<NOTE_TYPE[]>([])

   await axios.get("/api/users_notes").then((res) => {
      const notes: NOTE_TYPE[] = res.data
      const user_note = notes.filter((note) => note.userId === userId)
      setUserNote((prev) => [...prev, ...user_note])
   })

   return { userNote }
}
