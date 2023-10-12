import Navgivation from "@/components/navgivation"
import { ModeToggle } from "@/components/theme/ModeToggle"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/tailwind.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Provider from "./context/Provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Next Auth",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <Provider session={""}>
            <body className={inter.className}>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
               >
                  <div className="absolute top-3 right-3">
                     <ModeToggle />
                  </div>
                  <Navgivation />
                  {children}
                  <Toaster />
               </ThemeProvider>
            </body>
         </Provider>
      </html>
   )
}
