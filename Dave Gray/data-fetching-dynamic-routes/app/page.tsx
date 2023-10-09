import Link from "next/link"

export default function Home() {
   return (
      <main className="h-screen w-full flex justify-center items-center gap-6">
         <h1>Home</h1>
         <Link
            className="text-blue-300 hover:scale-[1.1] transition-all ease-linear duration-150"
            href="/users"
         >
            Users
         </Link>
      </main>
   )
}
