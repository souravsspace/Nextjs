import { ModeToggle } from "@/components/theme/ModeToggle"
import Link from "next/link"

export default async function Navigation() {
  return (
    <main>
      <ModeToggle />
      <div className="flex gap-4 justify-center items-center my-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/api/auth/signout">
          Sign Out
        </Link>
        <Link className="hover:underline" href="/api/auth/signin">
          Sign In
        </Link>
        <Link className="hover:underline" href="/client">
          Client
        </Link>
        <Link className="hover:underline" href="/extra">
          Extra
        </Link>
      </div>
    </main>
  )
}
