import PostList from "@/app/posts/PostList"
import { getSortedPostsData } from "@/lib/posts"

export default function Posts() {
   const posts = getSortedPostsData()
   return (
      <main className="max-w-4xl mx-auto">
         <div>
            <h1 className="uppercase text-2xl font-bold mb-5">blog</h1>
         </div>
         <section className="grid gap-y-3">
            {posts.map((post) => (
               <PostList key={post.id} {...post} />
            ))}
         </section>
      </main>
   )
}
