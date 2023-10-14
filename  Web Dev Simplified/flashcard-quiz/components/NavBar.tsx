import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { FormEvent, useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function NavBar() {
   const [category, setCategory] = useState<CATEGORIES[]>([])

   const router = useRouter()

   const categoryEl = useRef<HTMLSelectElement | null>(null)
   const amountEl = useRef<HTMLInputElement | null>(null)

   useEffect(() => {
      fetch("api/category")
         .then((res) => res.json())
         .then((data: CATEGORIES[]) => {
            setCategory((prev) => [...prev, ...data])
         })
   }, [])

   function handleForm(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      const amount = amountEl.current?.value
      const category = categoryEl.current?.value
      router.push(`?amount=${amount}&category=${category}`)
   }

   return (
      <form
         onSubmit={handleForm}
         className="flex justify-evenly items-center py-2 md:py-6 px-4 md:px-12"
      >
         <div className="flex flex-col gap-1 items-center">
            <Label>Category</Label>
            <select
               className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-xl"
               ref={categoryEl}
            >
               {category.map((item, index) => (
                  <option key={index + 1} value={item.name}>
                     {item.name}
                  </option>
               ))}
            </select>
         </div>
         <div className="flex flex-col gap-1 items-center">
            <Label htmlFor="noq">Number of Questions</Label>
            <Input
               className="rounded-xl"
               type="number"
               id="noq"
               min="1"
               step="1"
               defaultValue={10}
               ref={amountEl}
            />
         </div>
         <div className="flex flex-col gap-1 items-center">
            <span className="opacity-0">.</span>
            <Button type="submit" className="rounded-xl">
               Generate
            </Button>
         </div>
      </form>
   )
}
