import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { randomUUID } from "crypto"

// get all the posts in the blog-posts directory
const postsDirectory = path.join(process.cwd(), "blog-posts")

export function getSortedPostsData() {
   // read all the file names in the posts directory
   const fileNames = fs.readdirSync(postsDirectory)

   const allPostsData = fileNames.map((fileName) => {
      const randomId = randomUUID()

      // read markdown file as string && read the file content
      const fullPath = path.join(postsDirectory, fileName)
      const fileContent = fs.readFileSync(fullPath, "utf8")

      // use gray-matter to parse the post metadata section
      const matterResult = matter(fileContent)

      const blogPost: BLOG_POST = {
         id: randomId,
         title: matterResult.data.title,
         date: matterResult.data.date,
      }

      return blogPost
   })

   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
