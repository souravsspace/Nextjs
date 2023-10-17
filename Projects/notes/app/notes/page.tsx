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
import { Textarea } from "@/components/ui/textarea"
import AllNotesOfUser from "./AllNotesOfUser"

export function generateMetadata() {
   return {
      title: "All Notes",
   }
}

export default function Notes() {
   return (
      <main className="container flex gap-5 w-full md:flex-row flex-col">
         <Card className="w-full min-w-[350px]">
            <CardHeader>
               <CardTitle>All The Notes</CardTitle>
               <CardDescription>
                  See all of your notes, that you have created!
               </CardDescription>
            </CardHeader>
            <CardContent>
               <AllNotesOfUser />
            </CardContent>
         </Card>
         <Card className="min-w-[350px]">
            <CardHeader>
               <CardTitle>Create Notes</CardTitle>
               <CardDescription>
                  What area are you wanting to save?
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
               <CardTitle>
                  <Label htmlFor="title">Title</Label>
               </CardTitle>
               <Input
                  className="!ring-0"
                  id="title"
                  placeholder="Topic title.."
               />
               <Label htmlFor="description">Description</Label>
               <Textarea
                  className="!ring-0"
                  id="description"
                  placeholder="Include some description.."
               />
            </CardContent>
            <CardFooter className="flex justify-end">
               <Button>Save it!</Button>
            </CardFooter>
         </Card>
      </main>
   )
}
