import Link from "next/link"
import Search from "./Search"

export default function Navigation() {
   return (
      <main className="px-3 md:px-12 py-2 md:py-6 shadow-xl shadow-card">
         <section className="flex justify-between items-center flex-col md:flex-row">
            <Link className="text-2xl tracking-tighter font-bold" href="/">
               WikiRocket!
            </Link>
            <Search />
         </section>
      </main>
   )
}
