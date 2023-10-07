import { Product } from "../Product"
import { ProductType } from "../page"

type PARAMS = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&select=title,price"
  )
  const data = await res.json()
  return data.products.map((product: ProductType) => ({
    id: product.id.toString(),
  }))
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}

export default async function ProductPage({ params }: PARAMS) {
  const product: ProductType = await getProduct(params.id)
  console.log(product)
  return (
    <>
      <Product {...product} isAllProduct />
    </>
  )
}
