import Link from "next/link";
import { getSlug } from "@/lib/utils";
import { fetchPosts } from "@/lib/dbdata";
import { Post } from "@prisma/client";

export default async function LatestPosts({
  quantity,
  category,
}: {
  quantity: number;
  category?: string;
}) {
  const posts = await fetchPosts(quantity, category);

  return (
    <div className="ct-flex-row">
      {posts.map((post) => {
        const slug = getSlug(post.title);
        return (
          <Link href={`/aprende/${category}/${slug}`} key={post.id} className="w-full">
            <PostCard post={post} />
          </Link>
        );
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
