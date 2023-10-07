import { Product } from "./Product"

export async function getProduct() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&select=title,price"
  )
  const data = await res.json()
  return data.products
}

export type ProductType = {
  id: string
  title: string
  description: string
  price: number
  stock: 96
  brand: string
  thumbnail: string
  isAllProduct?: boolean
}

export default async function DynamicRoutesProduct() {
  const products = await getProduct()
  return (
    <main className="grid gap-10">
      <span className="text-2xl text-purple-400">
        Hello dynamic routes product
      </span>
      <div className="grid gap-3 grid-cols-3">
        {products.map((product: ProductType) => (
          <Product key={product.id} {...product}></Product>
        ))}
      </div>
    </main>
  )
}
