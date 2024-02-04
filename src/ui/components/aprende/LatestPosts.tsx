import Link from "next/link";
import { getSlug } from "@/lib/utils";
import { fetchPosts } from "@/lib/dbdata";
import { Post } from "@prisma/client";
import { Lang } from "@/lib/definitions";

export default async function LatestPosts({
  quantity,
  category,
  dict,
  lang,
}: {
  quantity: number;
  category?: string;
  dict: any;
  lang: Lang;
}) {
  const posts = await fetchPosts(quantity, category);

  if (posts.length === 0) return <p>{dict.description}</p>;

  return (
    <div className="ct-flex-row mt-2">
      {posts.map((post) => {
        const slug = getSlug(post.title_es);
        return (
          <Link
            href={`/aprende/${category}/${slug}`}
            key={post.id}
            className="w-full"
          >
            <PostCard post={post} lang={lang} />
          </Link>
        );
      })}
    </div>
  );
}

export function PostCard({ post, lang }: { post: Post; lang: Lang }) {
  const title =
    lang === "es" ? post?.title_es : post?.title_en ?? post?.title_es;
  return (
    <article className="rounded-md bg-dark p-4 w-full hover:scale-[.97] transition-transform">
      <h2 className="text-xl text-opposite">{title}</h2>
      <div className="flex flex-row gap-2">
        <span className="text-sm font-medium">
          {post.createdAt.toLocaleDateString()}
        </span>
        <span className="text-sm text-hashtags font-medium">
          {post.hashtags.join(" ")}
        </span>
      </div>
    </article>
  );
}
