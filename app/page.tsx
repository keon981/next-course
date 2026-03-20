import { Suspense } from "react"
import Layout from "@/components/block/layout"
import Content from "@/features/home/content"

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Content />
      </Suspense>
    </Layout>
  )
}
