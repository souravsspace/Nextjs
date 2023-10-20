import { getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"

type Props = {
   params: {
      postId: string
   }
}

export function generateMetadata({ params }: Props) {
   const posts = getSortedPostsData()
   const { postId } = params

   const post = posts.find((post) => post.id === postId)

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
   const { postId } = params

   const post = posts.find((post) => post.id === postId)

   if (!post) {
      return notFound()
   }

   return (
      <main className="max-w-4xl mx-auto my-12">
         <span>{postId}</span>
      </main>
   )
}
