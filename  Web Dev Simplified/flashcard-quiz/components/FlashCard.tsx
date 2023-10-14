import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function FlashCard({ question, answer, options }: FLASH_CARD) {
   const [flip, setFlip] = useState(false)

   return (
      <Card
         className={`${
            flip ? "flip" : ""
         }  card rounded-xl flex items-center justify-center flex-col cursor-pointer
            hover:shadow-xl hover:shadow-primary/20 min-h-[300px]`}
         onClick={() => setFlip(!flip)}
      >
         {flip ? (
            <CardContent className="back flex items-center justify-center text-center">
               {answer}
            </CardContent>
         ) : (
            <section className="front flex items-center justify-center flex-col">
               <CardHeader>
                  <CardTitle className="text-center">{question}</CardTitle>
               </CardHeader>
               <CardContent className="grid grid-cols-2 gap-1 w-full">
                  {options.map((option) => (
                     <h1 key={option} className="text-center cursor-pointer">
                        {option}
                     </h1>
                  ))}
               </CardContent>
            </section>
         )}
      </Card>
   )
}
