import { formater } from "@/lib/formater"
import { ProductType } from "./page"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProductBtn from "./ProductBtn"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Product({
  id,
  title,
  price,
  isAllProduct,
  description,
  stock,
  brand,
  thumbnail,
}: ProductType) {
  return (
    <Card
      className={`${
        !isAllProduct && "hover:scale-[1.01]"
      } transition-all ease-linear duration-100`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {!isAllProduct ? (
          <CardDescription>{formater(price)}</CardDescription>
        ) : (
          <main className="grid gap-4 grid-cols-2">
            <section>
              <Image
                src={thumbnail}
                alt={title}
                width={300}
                height={300}
                layout="responsive"
              />
            </section>
            <section className="flex flex-col justify-center">
              <CardDescription>{brand}</CardDescription>
              <CardDescription>{stock}</CardDescription>
              <CardDescription>{description}</CardDescription>
            </section>
          </main>
        )}
      </CardContent>
      <CardFooter>
        {!isAllProduct ? (
          <ProductBtn id={id} />
        ) : (
          <Button>
            <span>{formater(price)} Buy</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
