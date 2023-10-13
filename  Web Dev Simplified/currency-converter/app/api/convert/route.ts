import { NextResponse } from "next/server"

type REQ_DATA = {
   body: {
      from: string
      to: string
      amount: number
   }
}

export async function GET(request: Request) {
   const { body }: REQ_DATA = await request.json()
   //  const { from, to, amount } = body

   const { amount } = body

   const from = "usd"
   const to = "eur"
   //  const amount = 10

   if (!from || !to || !amount)
      return NextResponse.json(
         { error: "Missing required fields" },
         { status: 400 }
      )

   const BASE_URL = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`
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
