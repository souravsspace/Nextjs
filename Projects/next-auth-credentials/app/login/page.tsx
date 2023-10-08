import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center">
      <form>
        <Card className="mx-auto min-w-[350px]">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your credentials to login.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="user@example.com"
              type="email"
              name="email"
              required
            />
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" required />
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full" type="submit">
              Login
            </Button>
            <CardDescription>
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register
              </Link>
            </CardDescription>
          </CardFooter>
        </Card>
      </form>
    </main>
  )
}
