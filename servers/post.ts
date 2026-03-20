export async function getPostList(page: number, limit: number) {
  const res = await fetch(`/api/post/list?page=${page}&limit=${limit}`)
  const json = await res.json()
  return json.data
}

export async function addPost(data: { title: string; content: string }) {
  const res = await fetch("/api/post/add", {
    method: "POST",
    body: JSON.stringify(data),
  })
  const json = await res.json()
  return json.data
}
