import { decodeString } from "@/lib/decodeString"
import { useEffect, useState } from "react"
import { v4 as uuidV4 } from "uuid"

export default function useFlash() {
   const [flashcards, setFlashcards] = useState<FLASH_CARD[]>([])

   useEffect(() => {
      fetch("/api/questions")
         .then((res) => res.json())
         .then((results: RESULTS[]) => {
            results.map((result) => {
               const currectAnswer = decodeString(result.correct_answer)
               const allOptions = [
                  ...result.incorrect_answers.map((option) =>
                     decodeString(option)
                  ),
                  currectAnswer,
               ]
               const flashCard: FLASH_CARD = {
                  id: uuidV4(),
                  question: decodeString(result.question),
                  answer: currectAnswer,
                  options: allOptions.sort(() => Math.random() - 0.5),
               }
               return setFlashcards((flashcards) => [...flashcards, flashCard])
            })
         })
   }, [])

   return { flashcards }
}
