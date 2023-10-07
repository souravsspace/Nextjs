export default async function getAlluser() {
  const res = await fetch("https://dummyjson.com/users?limit=9")
  if (!res.ok) throw new Error("Failed to fetch users")

  try {
    const data = await res.json()
    return data.users
  } catch (err) {
    throw new Error("Failed to parse JSON")
  }
}
