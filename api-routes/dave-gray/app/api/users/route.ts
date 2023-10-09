import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY_Hudai = process.env.API_KEY as string

//  get request
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)
  const userData: FOR_USER[] = await res.json()
  return NextResponse.json(userData)
}

// delete request
export async function DELETE(request: Request) {
  const { id }: Partial<FOR_USER> = await request.json()
  if (!id)
    return NextResponse.json({
      message: "something went wrong",
      error: 404,
    })
  fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY_Hudai,
    },
  })

  return NextResponse.json({
    message: `Success of id: ${id}`,
  })
}

// Post request
export async function POST(request: Request) {
  const { userId, title }: Partial<FOR_USER> = await request.json()

  if (!userId || !title)
    return NextResponse.json({
      message: "failed",
      error: 404,
    })
  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY_Hudai,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  })

  const newTodos: FOR_USER = await res.json()

  return NextResponse.json(newTodos)
}

// put request
export async function PUT(request: Request) {
  const { id, title, userId, completed }: FOR_USER = await request.json()

  if (!id || !title || !userId || typeof completed !== "boolean")
    return NextResponse.json({ message: "Error happend!" })

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY_Hudai,
    },

    body: JSON.stringify({
      title,
      userId,
      completed,
    }),
  })
  const updatedTodo = await res.json()
  return NextResponse.json(updatedTodo)
}
