import Link from 'next/link'

export default function Navgivation() {
  return (
    <div className="flex justify-center items-center gap-3 p-6 w-full">
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/Home">Home</Link>
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/dashboard">Dashboard</Link>
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/login">Login</Link>
        <Link className="hover:underline hover:scale-[1.03] transition-all ease-linear text-xl" href="/register">Register</Link>
      </div>
  )
}
