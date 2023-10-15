import "@/styles/globals.css"
import "@radix-ui/themes/styles.css"
import "@/styles/theme-config.css"
import type { Metadata } from "next"
import NavBar from "@/components/NavBar"
import { Theme } from "@radix-ui/themes"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

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
         <body className={inter.variable}>
            <Theme appearance="light" accentColor="blue" scaling="110%">
               <NavBar />
               <main className="px-5">{children}</main>
               {/* <ThemePanel /> */}
            </Theme>
         </body>
      </html>
   )
}
