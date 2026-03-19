import { withApiHandler } from "@/utils/withApiHandler"
import { error, success } from "@/utils/apiResponse"
import { NextRequest } from "next/server"
import clientPromise from "@/lib/mongodb"

const dbName = process.env.DB_NAME ?? ""

export const POST = withApiHandler(async (request: NextRequest) => {
  const body = await request.json()
  const { title, content } = body

  if (!title || !content) {
    return Response.json(error("Title and content are required"), {
      status: 400,
    })
  }

  const client = await clientPromise
  const db = client.db(dbName)
  const collection = db.collection("posts")
  const res = await collection.insertOne({
    title,
    content,
    createAt: new Date().getTime(),
  })

  return Response.json(success({ id: res.insertedId }), { status: 200 })
})
