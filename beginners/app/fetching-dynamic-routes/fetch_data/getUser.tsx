export default async function getUser(userId: string) {
  const res = await fetch(`https://dummyjson.com/users/${userId}`)
  if (!res.ok) throw new Error("Failed to fetch users")

  try {
    const data = await res.json()
    return data
  } catch (err) {
    throw new Error("Failed to parse JSON")
  }
}
