import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { getFormatedDate } from "@/lib/format-date"
import { getSinglePost, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
   const posts = getSortedPostsData()

   return posts.map((post) => ({
      params: {
         id: post.id,
      },
   }))
}

type Props = {
   params: {
      id: string
   }
}

export function generateMetadata({ params }: Props) {
   const posts = getSortedPostsData()
   const { id } = params

   const post = posts.find((post) => post.id === id)

   if (!post) {
      return {
         title: "Not Found",
      }
   }

   return {
      title: post.title,
   }
}

export default async function SinglePost({ params }: Props) {
   const posts = getSortedPostsData()
   const { id } = params

   const post = posts.find((post) => post.id === id)

   if (!post) {
      return notFound()
   }

   const { title, date, contentHtml } = await getSinglePost(id)

   return (
      <main className="max-w-4xl mx-auto my-12">
         <Card>
            <CardHeader>
               <div className="flex justify-between items-center">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-sm text-white/70">
                     {getFormatedDate(date)}
                  </CardDescription>
               </div>
            </CardHeader>
            <CardContent className="prose prose-xl prose-slate dark:prose-invert">
               <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </CardContent>
            <CardFooter className="flex justify-end items-center">
               <Button>
                  <Link href="/">Back</Link>
               </Button>
            </CardFooter>
         </Card>
      </main>
   )
}
