import Posts from "./posts/Posts"

export default function Home() {
   return (
      <main className="my-12 space-y-6">
         <h1 className="text-2xl text-center">
            Hello and welcome! I&apos;m{" "}
            <span className="font-bold">Sourav</span>{" "}
         </h1>
         <Posts />
      </main>
   )
}
