import getAllUsers from "@/lib/getAllUsers"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
   title: "Users",
}

export default async function Users() {
   const usersData: Promise<USER[]> = getAllUsers()

   const users = await usersData

   return (
      <main className="p-10">
         <section className="grid gap-4">
            {users.map((user) => (
               <div
                  key={user.id}
                  className="flex flex-col gap-2 cursor-pointer hover:underline transition-all ease-linear"
               >
                  <Link href={`users/${user.id}`}>{user.name}</Link>
               </div>
            ))}
         </section>
      </main>
   )
}
