import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://dummyjson.com/todos"
const API_KEY: string = process.env.API_KEY as string

// GET method
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const user: USER[] = await res.json()
  return NextResponse.json(user)
}

// POST method

export async function POST(request: Request) {
  const { userId, todo }: Partial<USER> = await request.json()

  if (!userId || !todo)
    return NextResponse.json({ error: "something went worng", status: 400 })

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      API_Key: API_KEY,
    },
    body: JSON.stringify({
      userId,
      todo,
      completed: false,
    }),
  })

  const newTodo: USER = await res.json()
  return NextResponse.json(newTodo)
}

// DELETE method
export async function DELETE(request: Request) {
  const { id }: Partial<USER> = await request.json()
  if (!id)
    return NextResponse.json({ error: "id is required" }, { status: 400 })

  fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      API_Key: API_KEY,
    },
  })

  return NextResponse.json({ message: `Delete Success id: ${id}` })
}
