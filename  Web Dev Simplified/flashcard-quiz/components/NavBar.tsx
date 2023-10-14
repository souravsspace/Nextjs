import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { useEffect, useRef, useState } from "react"
// import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function NavBar() {
   const [category, setCategory] = useState<CATEGORIES[]>([])
   const [amount, setAmount] = useState("10")
   //  const [categoryItem, setCategoryItem] = useState("9")

   const categoryItem = useRef<HTMLSelectElement>(null)

   useEffect(() => {
      fetch("api/category")
         .then((res) => res.json())
         .then((data: CATEGORIES[]) => {
            setCategory((prev) => [...prev, ...data])
         })
   }, [])

   //  const searchParams = useSearchParams()
   //  const search_amount = searchParams.get("amount")
   //  const search_selectedCategory = searchParams.get("category")

   return (
      <div className="flex justify-evenly items-center py-2 md:py-6 px-4 md:px-12">
         <div className="flex flex-col gap-1 items-center">
            <Label>Category</Label>
            <Link
               href={`?amount=${amount}&category=${categoryItem.current?.value}`}
            >
               <select
                  className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-xl"
                  ref={categoryItem}
               >
                  {category.map((item, index) => (
                     <option key={index + 1} value={item.id}>
                        {item.name}
                     </option>
                  ))}
               </select>
            </Link>
         </div>
         <div className="flex flex-col gap-1 items-center">
            <Link
               href={`?amount=${amount}&category=${categoryItem.current?.value}`}
            >
               <Label htmlFor="noq">Number of Questions</Label>
               <Input
                  className="rounded-xl"
                  type="number"
                  id="noq"
                  min="1"
                  step="1"
                  defaultValue={amount}
                  onChange={(e) => setAmount(e.target.value.toString())}
               />
            </Link>
         </div>
      </div>
   )
}
