import Link from "next/link"
import { AiFillBook } from "react-icons/ai"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Navigation() {
   const socialLinks = [
      {
         name: "Github",
         url: "https://github.com/souravsspace/",
         icons: <BsGithub />,
      },
      {
         name: "Twitter",
         url: "https://twitter.com/souravukil04",
         icons: <BsTwitter />,
      },
      {
         name: "LinkedIn",
         url: "https://www.linkedin.com/in/md-sourav-ukil-856211292/",
         icons: <BsLinkedin />,
      },
   ]
   return (
      <nav className="sticky top-0 z-50">
         <section className="prose prose-2xl flex justify-between items-center mx-auto py-5">
            <Link
               href="/"
               className="text-white/70 hover:text-white transition-all text-2xl flex items-center gap-x-2 no-underline"
            >
               <AiFillBook />
               <span>Blogs</span>
            </Link>
            <div className="flex gap-3 items-center">
               <div className="flex gap-3 items-center">
                  {socialLinks.map((link) => (
                     <Link
                        href={link.url}
                        key={link.name}
                        target="_blank"
                        className="text-white/70 hover:text-white transition-all text-2xl"
                     >
                        {link.icons}
                     </Link>
                  ))}
               </div>
               <Separator orientation="vertical" />
               <Avatar className="cursor-pointer">
                  <AvatarImage src="/sourav.jpgg" />
                  <AvatarFallback className="bg-primary/70 hover:bg-primary text-primary-foreground/70 hover:text-primary-foreground transition-all">
                     SU
                  </AvatarFallback>
               </Avatar>
            </div>
         </section>
         <section className="px-3 md:px-20">
            <Separator />
         </section>
      </nav>
   )
}
