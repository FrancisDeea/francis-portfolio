import { fetchPosts } from "@/lib/dbdata";
import { Post } from "@prisma/client";

export default async function LatestPosts({ quantity }: { quantity: number }) {
  const posts = await fetchPosts(quantity);

  return (
    <div className="ct-flex-row">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-md bg-dark p-4 w-full">
      <h2 className="text-xl">{post.title}</h2>
      <div>
        <span className="text-sm">{post.createdAt.toLocaleDateString()}</span>
        <span className="text-sm">{post.hashtags.join(" ")}</span>
      </div>
    </article>
  );
}
