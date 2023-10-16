import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import "@/style/tailwind.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Notes",
   description: "Notes",
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
            <main className="container mx-auto">{children}</main>
            <Footer />
         </body>
      </html>
   )
}