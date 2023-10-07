"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type ProductBtnProps = {
  id: string
}

export default function ProductBtn({ id }: ProductBtnProps) {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.push(`/dynamic-routes-product/${id}`)}
      className="btn btn-primary"
    >
      Add to cart
    </Button>
  )
}
