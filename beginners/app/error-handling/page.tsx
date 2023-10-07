import { Metadata } from "next"

const auth = null

export const metadata: Metadata = {
  title: "Error Handling",
}

export default function ErrorHandling() {
  if (!auth) throw new Error("Please login to continue")
  return <div>ErrorHandling</div>
}
