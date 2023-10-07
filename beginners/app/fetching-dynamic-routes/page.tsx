import { Metadata } from "next"
import React from "react"
import getAlluser from "./fetch_data/getAlluser"
import { UserCard } from "./UserCard"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Users",
}

export default async function Users() {
  const usersData: Promise<USER[]> = getAlluser()
  const users = await usersData
  return (
    <>
      <h2 className="text-3xl text-primary font-bold mb-6">Users</h2>
      <main className="grid gap-4 grid-cols-3">
        {users.map((user) => (
          <Link key={user.id} href={`fetching-dynamic-routes/${user.id}`}>
            <UserCard {...user} />
          </Link>
        ))}
      </main>
    </>
  )
}
