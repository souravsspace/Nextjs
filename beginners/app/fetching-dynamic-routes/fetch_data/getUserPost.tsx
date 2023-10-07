export default async function getUserPost(userId: string) {
  const res = await fetch(`https://dummyjson.com/posts?userId=${userId}`)
  if (!res.ok) throw new Error("Failed to fetch users")

  try {
    const data = await res.json()
    return data.posts
  } catch (err) {
    throw new Error("Failed to parse JSON")
  }
}
