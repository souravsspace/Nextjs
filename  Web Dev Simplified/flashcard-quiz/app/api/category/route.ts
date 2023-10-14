import { NextResponse } from "next/server"

export async function GET() {
   const category = "https://opentdb.com/api_category.php"
   const res = await fetch(category)
   const data = await res.json()
   try {
      const categories: CATEGORIES[] = await data.trivia_categories
      return NextResponse.json(categories)
   } catch (error) {
      return NextResponse.json("Error: " + error)
   }
}
