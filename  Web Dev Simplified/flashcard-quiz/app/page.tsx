"use client"

import FlashCardList from "@/components/FlashCardList"
import NavBar from "@/components/NavBar"
import useFlash from "./hook/useFlash"

export default function Home() {
   const { flashcards } = useFlash()
   return (
      <>
         <NavBar />
         <FlashCardList flashcards={flashcards} />
      </>
   )
}
