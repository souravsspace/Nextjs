import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "@/style/tailwind.css"
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Auth",
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
          <Navigation />
          <main className="p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
