"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog"
import { useState } from "react"

function CommentEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <Dialog>
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
          <DialogClose asChild>
            <Button>Post</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CommentEditor
