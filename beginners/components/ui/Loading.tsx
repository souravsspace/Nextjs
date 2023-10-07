import { ReloadIcon } from "@radix-ui/react-icons"
import React from "react"

export default function Loading() {
  return (
    <main className="mx-auto flex justify-center my-4">
      <ReloadIcon className="animate-spin" />
    </main>
  )
}
