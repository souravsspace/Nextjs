export default async function getuserPost(userId: string) {
   try {
      const res = await fetch(
         `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
      return res.json()
   } catch (error) {
      console.log("something went wrong", error)
   }
}
