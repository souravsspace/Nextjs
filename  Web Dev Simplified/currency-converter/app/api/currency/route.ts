import { NextResponse } from "next/server"

export async function GET() {
   const BASE_URL = "https://api.apilayer.com/exchangerates_data/symbols"

   const myHeaders = new Headers()
   myHeaders.append("apikey", process.env.EXCHANGE_RATES_API_KEY as string)

   const res = await fetch(BASE_URL, {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
   })

   try {
      const data = await res.json()
      return NextResponse.json(data)
   } catch (err) {
      return NextResponse.json(err, { status: 400 })
   }
}
