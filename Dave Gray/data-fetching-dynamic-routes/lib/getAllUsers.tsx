export default async function getAllUsers() {
   try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      return res.json()
   } catch (error) {
      console.log("something went wrong", error)
   }
}
