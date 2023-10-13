"use client"

import { FormEvent, useState } from "react"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function Search() {
   const [value, setValue] = useState("")
   const router = useRouter()

   function handleSearch(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      router.push(`/${value}/`)
      setValue("")
   }

   return (
      <form
         onSubmit={handleSearch}
         className="flex justify-center items-center"
      >
         <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="max-w-xs rounded-md outline-none"
            type="text"
            placeholder="Search"
            required
         />
         <Button type="submit" variant="none">
            <span className="text-2xl">🚀</span>
         </Button>
      </form>
   )
}
