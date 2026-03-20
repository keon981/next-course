interface PostProps {
  post?: Post
}

export function PostBlock({ post }: PostProps) {
  const { title = "--", content = "-", createdAt = 0 } = post || {}

  return (
    <div className="w-full rounded-md border border-white/40 px-4 py-6">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/50">{content}</p>
      <p className="mt-2 text-sm text-white/50">
        {/* {new Date(createdAt).toLocaleString()} */}
        2025-07-25
      </p>
    </div>
  )
}
