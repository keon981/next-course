import { MongoClient } from "mongodb"
import { uri } from "./env"

const options = {
  maxPoolSize: 10,
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options)
  global._mongoClientPromise = client.connect()
}

// eslint-disable-next-line prefer-const
clientPromise = global._mongoClientPromise

export default clientPromise
