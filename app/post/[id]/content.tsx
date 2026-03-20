"use client"

import { PostBlock } from "@/components/block/post"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
}

export default function Content() {
  const router = useRouter()

  return (
    <div>
      <Button
        variant={"ghost"}
        onClick={() => router.back()}
        className="text-sm font-bold text-white"
      >
        {"← Back"}
      </Button>
      <PostBlock post={mockPost} />
    </div>
  )
}
