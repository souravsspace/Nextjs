import "@/styles/tailwind.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Flashcard Quiz",
   description: "A flashcard quiz app built with Next.js and TypeScript.",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   )
}
