"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog"
import { addPost } from "@/servers/post"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function CommentEditor() {
  // navigarion
  const router = useRouter()
  const searchParams = useSearchParams()

  // state
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // query
  const queryClient = useQueryClient()

  // value
  const currentpage = Number(searchParams.get("page") || 1)

  const { mutate: addPostMutation, isPending } = useMutation({
    mutationFn: addPost,
    onSuccess() {
      setIsOpen(false)
      queryClient.invalidateQueries({ queryKey: ["posts", 1] })

      if (currentpage !== 1) router.push(`/?page=1`)
    },
  })

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const onPost = () => {
    if (isPending) return
    if (!title || !content) {
      alert("Please fill in all fields")
      return
    }
    addPostMutation({ title, content })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
          What&apos;s on your mind?
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="font-bold text-white">
          What&apos;s on your mind?
        </DialogTitle>
        <input
          placeholder="Title"
          type="text"
          className="h-10 w-full rounded-md border border-white/10 p-2 text-sm focus:outline-none"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          placeholder="Comment"
          className="h-25 w-full rounded-md border border-white/10 p-2 text-sm focus:outline-none"
          value={content}
          onChange={onContentChange}
        />
        <div className="flex justify-end gap-4 text-sm">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button onClick={onPost}>Post</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CommentEditor
