import { NextRequest } from "next/server"
import { withApiHandler } from "@/utils/withApiHandler"
import { success } from "@/utils/apiResponse"
import clientPromise from "@/lib/mongodb"
import { dbName } from "@/lib/env"

export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 10)
  const skip = (page - 1) * limit

  const client = await clientPromise
  const db = client.db(dbName)
  const collection = db.collection("posts")
  const total = await collection.countDocuments()
  const posts = await collection
    .find({})
    .skip(skip)
    .limit(limit)
    .sort({ createAt: -1 })
    .toArray()

  return Response.json(
    success({
      posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }),
    { status: 200 }
  )
})
