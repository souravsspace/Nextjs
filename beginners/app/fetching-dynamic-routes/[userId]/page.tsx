import { Suspense } from "react"
import getUser from "../fetch_data/getUser"
import getUserPost from "../fetch_data/getUserPost"
import UserPost from "./UserPost"
import Loading from "@/components/ui/Loading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type UserIdProps = {
  params: {
    userId: string
  }
}

export default async function UserId({ params }: UserIdProps) {
  const userData: Promise<USER> = getUser(params.userId)
  const userPostdata: Promise<USER_POST[]> = getUserPost(params.userId)

  const user = await userData

  return (
    <div>
      <section className="flex justify-between w-full">
        <span className="text-2xl font-bold">
          {user.firstName} {user.lastName}
        </span>
        <Button>
          <Link href=".">Back</Link>
        </Button>
      </section>
      <section>
        <Suspense fallback={<Loading />}>
          <UserPost userPostData={userPostdata} />
        </Suspense>
      </section>
    </div>
  )
}
