"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PostProps {
  post?: Post;
}

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
};

const Post = ({ post }: PostProps) => {
  const { title = "--", content = "-", createdAt = 0 } = post || {};

  return (
    <div className="w-full border-b border-white/10 py-6">
      <h3 className="text-sm text-white font-bold">{title}</h3>
      <p className="text-sm text-white/50 mt-2">{content}</p>
      <p className="text-sm text-white/50 mt-2">
        {/* {new Date(createdAt).toLocaleString()} */}
        2025-07-25
      </p>
    </div>
  );
};

function PostPage() {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <Button variant={"outline"} onClick={() => router.back()} >
          {"← Back"}
        </Button>
        <Post post={mockPost} />
      </div>
    </Layout>
  );
};

export default PostPage;