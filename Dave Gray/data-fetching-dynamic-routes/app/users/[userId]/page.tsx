import { Button } from "@/components/ui/button"
import getUser from "@/lib/getUser"
import getuserPost from "@/lib/getuserPost"
import Link from "next/link"
import UserPost from "./UserPost"
import { Suspense } from "react"
import getAllUsers from "@/lib/getAllUsers"
import { notFound } from "next/navigation"

type Props = {
   params: {
      userId: string
   }
}

export async function generateMetadata({ params }: Props) {
   const userData: Promise<USER> = getUser(params.userId)
   const user = await userData
   
   if (!user.id) {
      return {
         title: "User not found",
      }
   }
   return {
      title: user.name,
   }
}

export default async function User({ params }: Props) {
   const usersData: Promise<USER> = getUser(params.userId)
   const user = await usersData

   const userPost: Promise<POST[]> = getuserPost(params.userId)

   if (!user.id) return notFound()

   return (
      <main className="p-10 grid gap-6">
         <section>
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <p className="text-gray-600">{user.website}</p>
            <div className="flex justify-end">
               <Button>
                  <Link href="/users">Back</Link>
               </Button>
            </div>
         </section>
         <section>
            <h1 className="text-xl font-bold mb-4">Posts</h1>
            <main className="border-l-8 border-blue-200 rounded-sm">
               <Suspense fallback={<div className="p-4">Loading..</div>}>
                  <UserPost userPost={userPost} />
               </Suspense>
            </main>
         </section>
      </main>
   )
}

export async function generateStaticParams() {
   const usersData: Promise<USER[]> = getAllUsers()
   const users = await usersData

   return users.map((user) => ({
      userId: user.id.toString(),
   }))
}
