import { NextResponse } from "next/server"

export async function GET(request: Request) {
   const url = new URL(request.url)
   const amount = url.searchParams.get("amount")
   const selectedCategory = url.searchParams.get("category")

   const api = `https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory}`
   const res = await fetch(api)

   try {
      const resData = await res.json()
      const results: RESULTS[] = await resData.results

      return NextResponse.json(results)
   } catch (error) {
      return NextResponse.json("Error: " + error)
   }
}
