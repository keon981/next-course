import Image from "next/image"
import PostList from "./post-list"
import CommentEditor from "./comment-editor"

const Content = () => {
  return (
    <>
      <Image
        src="/images/bitcoin-banner.jpeg"
        className="w-full rounded-lg border border-white/10"
        width={1584}
        height={396}
        alt="bitcoin-banner"
      />
      <h1 className="mt-2 text-2xl font-bold">@bitcoin</h1>
      <p className="mt-2 text-sm text-white/50">
        Bitcoin is a decentralized digital currency that enables instant,
        peer-to-peer transactions without intermediaries. It is based on
        blockchain technology, which is a distributed ledger that records
        transactions in a secure and transparent manner.
      </p>
      <div className="mt-8 w-full">
        <CommentEditor />
      </div>
      <PostList />
    </>
  )
}

export default Content
