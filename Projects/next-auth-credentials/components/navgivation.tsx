'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Navgivation() {
  const { status } = useSession()
  return (
    <div className="flex justify-center items-center gap-3 p-6 w-full">
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/">Home</Link>
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/dashboard">Dashboard</Link>
        {status === "authenticated" ? 
        <button className="hover:underline cursor-pointer hover:scale-[1.03] transition-all ease-linear text-xl" onClick={()=> signOut}>Logout</button>
        :
        <>
          <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/login">Login</Link>
          <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/register">Register</Link>
        </>
        }
      </div>
  )
}
