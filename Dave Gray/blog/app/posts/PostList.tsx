import { getFormatedDate } from "@/lib/format-date"
import Link from "next/link"

export default function PostList({ id, title, date }: Partial<BLOG_POST>) {
   return (
      <div>
         <Link href={`/posts/${id}`} className="underline">
            <h3 className="text-lg">{title}</h3>
         </Link>
         <p className="text-sm">{getFormatedDate(date!)}</p>
      </div>
   )
}
