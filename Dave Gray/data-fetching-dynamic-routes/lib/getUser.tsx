export default async function getUser(userId: string) {
   try {
      const res = await fetch(
         `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      return res.json()
   } catch (error) {
      console.log("something went wrong", error)
   }
}
