import Link from "next/link"
import { AiFillBug } from "react-icons/ai"

export default function NavBar() {
   const links = [
      {
         href: "/",
         label: "Dashboard",
      },
      {
         href: "/issues",
         label: "Issues",
      },
   ]

   return (
      <nav className="flex items-center mb-5 border-b px-5 h-14 space-x-5">
         <Link href="/">
            <AiFillBug />
         </Link>
         <ul className="space-x-5 flex">
            {links.map(({ href, label }, index) => (
               <li key={index}>
                  <Link
                     className="text-zinc-500 hover:text-zinc-800 transition-colors"
                     href={href}
                  >
                     {label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}
