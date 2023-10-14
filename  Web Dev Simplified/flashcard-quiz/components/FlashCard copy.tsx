import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function FlashCard({ question, answer, options }: FLASH_CARD) {
   const [flip, setFlip] = useState(false)
   const [height, setHeight] = useState<number | string>("initial")

   const frontEl = useRef<HTMLElement | null>(null)
   const backEl = useRef<HTMLDivElement | null>(null)

   function setMaxHeight() {
      if (!frontEl.current || !backEl.current) return
      const frontHeight = frontEl.current.getBoundingClientRect().height
      const backHeight = backEl.current.getBoundingClientRect().height
      setHeight(Math.max(frontHeight, backHeight, 100) as number)
   }

   useEffect(setMaxHeight, [question, answer, options])
   useEffect(() => {
      window.addEventListener("resize", setMaxHeight)
      return () => window.removeEventListener("resize", setMaxHeight)
   }, [])

   return (
      <Card
         className={`${
            flip ? "flip" : ""
         }  card rounded-xl flex items-center justify-center flex-col cursor-pointer
            hover:shadow-xl hover:shadow-primary/20 `}
         onClick={() => setFlip(!flip)}
         style={{ height: height }}
      >
         {flip ? (
            <CardContent
               className="back flex items-center justify-center text-center"
               ref={backEl}
            >
               {answer}
            </CardContent>
         ) : (
            <section className="front" ref={frontEl}>
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
