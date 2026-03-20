import { NextRequest } from "next/server"
import { withApiHandler } from "@/utils/withApiHandler"
import { error, success } from "@/utils/apiResponse"
import clientPromise from "@/lib/mongodb"
import { dbName } from "@/lib/env"

export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) {
    return Response.json(error("Id is required"), {
      status: 400,
    })
  }

  const client = await clientPromise
  const db = client.db(dbName)
  const collection = db.collection("posts")
  const res = await collection.findOne({ id })

  return Response.json(success({ id: res }), { status: 200 })
})
