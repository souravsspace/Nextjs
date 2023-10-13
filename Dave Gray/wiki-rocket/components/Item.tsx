import Image from "next/image"
import Link from "next/link"
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

type Props = {
   result: RESULT
}

export default function Item({ result }: Props) {
   return (
      <Card>
         <CardHeader>
            <CardTitle className="flex items-center justify-between">
               <span className="text-xl font-bold">{result.title}</span>
               {result?.thumbnail?.source && (
                  <Image
                     src={result.thumbnail.source}
                     alt={result.title}
                     width={result.thumbnail.width}
                     height={result.thumbnail.height}
                  />
               )}
            </CardTitle>
         </CardHeader>
         <CardContent>{result.extract}</CardContent>
         <CardFooter className="flex justify-end">
            <Button variant="outline">
               <Link
                  href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                  target="_blank"
               >
                  Read more...
               </Link>
            </Button>
         </CardFooter>
      </Card>
   )
}
