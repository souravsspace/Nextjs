import USER_CARD from "@/components/USER_CARD"
import { getServerSession } from "next-auth"

export default async function Client() {
  const session = await getServerSession()
  return (
    <>
      <USER_CARD user={session?.user} pageType="Client" />
    </>
  )
}
