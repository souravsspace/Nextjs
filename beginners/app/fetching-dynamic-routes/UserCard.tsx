import React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function UserCard({ firstName, lastName, email, image }: USER) {
  return (
    <Card className="flex flex-col justify-center items-center hover:scale-[1.03] transition-all ease-linear duration-150">
      <CardHeader>
        <Image
          src={image}
          alt={firstName + " " + lastName}
          width={200}
          height={200}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-bold text-primary">
          {firstName + " " + lastName}
        </h3>
        <p className="text-sm text-gray-500">{email}</p>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full">View</Button>
      </CardFooter>
    </Card>
  )
}
