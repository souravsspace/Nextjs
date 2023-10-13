import useCurrencyData from "@/lib/useCurrencyData"
import { Input } from "./ui/input"
import { ChangeEvent } from "react"

type Props = {
   currencyOptions: ReturnType<typeof useCurrencyData>["currencyOptions"]
   selectedCurrency: string
   onChangeCurrency: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function CurrencyRow({
   currencyOptions,
   selectedCurrency,
   onChangeCurrency,
}: Props) {
   return (
      <main className="flex gap-4 items-center">
         <Input type="number" />
         <select
            value={selectedCurrency}
            onChange={onChangeCurrency}
            className="flex h-9 px-3 py-1 rounded-md border border-input bg-transparent  text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
         >
            {currencyOptions.map((option, index) => (
               <option key={index + 1} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </main>
   )
}
