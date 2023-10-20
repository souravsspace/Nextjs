import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// get all the posts in the blog-posts directory
const postsDirectory = path.join(process.cwd(), "blog-posts")

export function getSortedPostsData() {
   // read all the file names in the posts directory
   const fileNames = fs.readdirSync(postsDirectory)

   const allPostsData = fileNames.map((fileName) => {
      const userId = fileName.replace(/\.md$/, "")

      // read markdown file as string && read the file content
      const fullPath = path.join(postsDirectory, fileName)
      const fileContent = fs.readFileSync(fullPath, "utf8")

      // use gray-matter to parse the post metadata section
      const matterResult = matter(fileContent)

      const blogPost: BLOG_POST = {
         id: userId,
         title: matterResult.data.title,
         date: matterResult.data.date,
      }

      return blogPost
   })

   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getSinglePost(id: string) {
   const fullPath = path.join(postsDirectory, `${id}.md`)
   const fileContent = fs.readFileSync(fullPath, "utf-8")

   const matterResult = matter(fileContent)

   const processedContent = await remark()
      .use(html)
      .process(matterResult.content)

   const contentHtml = processedContent.toString()

   const blogPost: BLOG_POST & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml,
   }

   return blogPost
}
