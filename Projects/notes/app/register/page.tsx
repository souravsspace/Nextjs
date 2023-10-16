import { Card } from "@/components/ui/card"
import { Metadata } from "next"
import RegisterForm from "./RegisterForm"
import { useForm } from "react-hook-form"

export const metadata: Metadata = {
   title: "Register",
}

export default function Register() {
   // const form = useForm()
   // const onSubmit = handleSubmit((data) => {
   //    console.log(data)
   // })
   return (
      <Card className="mx-auto max-w-md md:mt-14">
         <RegisterForm  />
      </Card>
   )
}
