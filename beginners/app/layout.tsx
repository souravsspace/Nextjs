import { ThemeProvider } from "@/components/theme/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Nav from "@/components/Nav"
import "@/style/globals.css"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beginners",
  description: "A Next.js starter for beginners.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
