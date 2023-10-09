type UserPostProps = {
   userPost: Promise<POST[]>
}

export default async function UserPost({ userPost }: UserPostProps) {
   const posts = await userPost
   return (
      <section>
         {posts.map((post) => (
            <article key={post.id} className="p-4 shadow rounded">
               <h1 className="text-xl font-bold mb-4">{post.title}</h1>
               <p className="text-gray-600">{post.body}</p>
            </article>
         ))}
      </section>
   )
}
