"use client"

import Link from "next/link"
import Pagination from "./pagination"
import { PostBlock } from "@/components/block/post"
import useQueryPostList from "@/hooks/useQueryPostList"

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList()
  const { posts = [], totalPages } = data || {}

  if (isLoading) {
    return <div className="mt-8">Thinking...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!posts.length) {
    return <div>None</div>
  }

  return (
    <div className="mt-8">
      {posts.map((post: Post) => (
        <div key={post.id} className="mt-4">
          <Link href={`/post/${post.id}`}>
            <PostBlock post={post} />
          </Link>
        </div>
      ))}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default PostList
