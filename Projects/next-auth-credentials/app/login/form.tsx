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
import { LOGIN_USER_TYPE } from "@/validation/schema.zod"
import Link from "next/link"

type Props = {
   disabled: boolean
   data: LOGIN_USER_TYPE
   setData: React.Dispatch<React.SetStateAction<LOGIN_USER_TYPE>>
   handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export default function Form({ data, disabled, setData, handleLogin }: Props) {
   return (
      <form onSubmit={handleLogin}>
         <Card className="mx-auto min-w-[350px]">
            <CardHeader>
               <CardTitle className="text-2xl">Login</CardTitle>
               <CardDescription>
                  Enter your credentials to login.
               </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
               <Label htmlFor="email">Email</Label>
               <Input
                  placeholder="user@example.com"
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
               />
               <Label htmlFor="password">Password</Label>
               <Input
                  type="password"
                  name="password"
                  required
                  value={data.password}
                  onChange={(e) =>
                     setData({ ...data, password: e.target.value })
                  }
               />
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
               <Button disabled={disabled} className="w-full" type="submit">
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
   )
}
