import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { USER_TYPE } from "@/validation/schema.zod"
import Link from "next/link"

type Props = {
   disabled: boolean
   data: USER_TYPE
   setData: React.Dispatch<React.SetStateAction<USER_TYPE>>
   handleRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export default function Form({
   data,
   disabled,
   setData,
   handleRegister,
}: Props) {
   return (
      <form onSubmit={handleRegister}>
         <Card className="mx-auto min-w-[350px]">
            <CardHeader>
               <CardTitle className="text-2xl">Register</CardTitle>
               <CardDescription>
                  Enter your credentials to Register.
               </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
               <Label htmlFor="name">Name</Label>
               <Input
                  value={data.name}
                  onChange={(e) => {
                     setData({ ...data, name: e.target.value })
                  }}
                  placeholder="John Doe"
                  type="name"
                  name="name"
                  required
               />
               <Label htmlFor="email">Email</Label>
               <Input
                  value={data.email}
                  onChange={(e) => {
                     setData({ ...data, email: e.target.value })
                  }}
                  placeholder="user@example.com"
                  type="email"
                  name="email"
                  required
               />
               <Label htmlFor="password">Password</Label>
               <Input
                  value={data.password}
                  onChange={(e) => {
                     setData({ ...data, password: e.target.value })
                  }}
                  type="password"
                  name="password"
                  required
               />
               <Label htmlFor="confirmPassword">Confirm password</Label>
               <Input
                  value={data.confirmPassword}
                  onChange={(e) => {
                     setData({ ...data, confirmPassword: e.target.value })
                  }}
                  type="password"
                  name="confirmPassword"
                  required
               />
               <div className="flex gap-1 items-center">
                  <Checkbox id="terms" required />
                  <label
                     htmlFor="terms"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                     Accept terms and conditions
                  </label>
               </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
               <Button disabled={disabled} className="w-full" type="submit">
                  Register
               </Button>
               <CardDescription>
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-500">
                     Login
                  </Link>
               </CardDescription>
            </CardFooter>
         </Card>
      </form>
   )
}
