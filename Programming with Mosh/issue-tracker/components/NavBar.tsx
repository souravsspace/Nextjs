"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillBug } from "react-icons/ai"
import classNames from "classnames"

export default function NavBar() {
   const currentPath = usePathname()

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
                     href={href}
                     className={classNames({
                        "text-zinc-500": href !== currentPath,
                        "text-zinc-900 font-semibold": href === currentPath,
                        "hover:text-zinc-800 transition-colors": true,
                     })}
                  >
                     {label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}
