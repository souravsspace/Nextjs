import type { Metadata } from "next"
import "@/styles/tailwind.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "WikiRocket",
   description: "A wiki for rocketry",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navigation />
            {children}
         </body>
      </html>
   )
}
