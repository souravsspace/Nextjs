"use client"

import CurrencyRow from "@/components/CurrencyRow"
import useCurrencyData from "@/lib/useCurrencyData"
import { ChangeEvent } from "react"

export default function Home() {
   const {
      currencyOptions,
      currencyFrom,
      currencyTo,
      setCurrencyFrom,
      setCurrencyTo,
   } = useCurrencyData()
   return (
      <main className="py-6 px-12 flex justify-center items-center flex-col gap-10 h-screen">
         <h1 className="text-3xl font-bold tracking-tighter">
            Currency Converter
         </h1>
         <div className="grid gap-6">
            <CurrencyRow
               currencyOptions={currencyOptions}
               selectedCurrency={currencyFrom}
               onChangeCurrency={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCurrencyFrom(e.target.value)
               }
            />
            <span className="text-3xl font-bold text-center">=</span>
            <CurrencyRow
               currencyOptions={currencyOptions}
               selectedCurrency={currencyTo}
               onChangeCurrency={(e: ChangeEvent<HTMLSelectElement>) =>
                  setCurrencyTo(e.target.value)
               }
            />
         </div>
      </main>
   )
}
