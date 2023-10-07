"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <main className="flex justify-end mt-5 mr-5">
        <Button variant="outline" size="icon" className="relative">
          <span onClick={() => setTheme("dark")}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </span>
          <span onClick={() => setTheme("light")}>
            <MoonIcon className="absolute top-[0.5rem] left-[0.5rem] h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </main>
      <hr className="bg-white my-4 mx-6" />
    </>
  )
}
