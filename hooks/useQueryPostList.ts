import { getPostList } from "@/servers/post"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

function useQueryPostList() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 2)

  return useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPostList(currentPage, limit),
  })
}

export default useQueryPostList
