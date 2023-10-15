import NavBar from "@/components/NavBar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Issue Tracker",
   description: "A simple issue tracker",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <NavBar />
            {children}
         </body>
      </html>
   )
}
