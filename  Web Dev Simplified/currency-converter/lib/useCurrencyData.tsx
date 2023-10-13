"use client"

import { useEffect, useState } from "react"

export default function useCurrencyData() {
   const [currencyOptions, setCurrencyOptions] = useState<string[]>([])
   const [currencyFrom, setCurrencyFrom] = useState("")
   const [currencyTo, setCurrencyTo] = useState("")

   useEffect(() => {
      fetch("api/currency")
         .then((res) => res.json())
         .then((data) => {
            const { symbols } = data
            const options = Object.keys(symbols)
            setCurrencyOptions((prev) => [...prev, ...options])
            setCurrencyFrom(options[0])
            setCurrencyTo(options[options.length - 1])
         })
         .catch((err) => console.log(err))
   }, [])

   return {
      currencyOptions,
      currencyFrom,
      currencyTo,
      setCurrencyFrom,
      setCurrencyTo,
   }
}
