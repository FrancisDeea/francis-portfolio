import { fetchPostsByCategory } from "@/lib/dbdata";
import { findByTitle, getSlug } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string };
}) {
  const posts = await fetchPostsByCategory(category);

  return posts.map((post) => {
    const slug = getSlug(post.title);
    return {
      slug: slug,
    };
  });
}

export default async function Page({
  params: { slug, category },
}: {
  params: { slug: string; category: string };
}) {
  console.log(slug)
  const posts = await fetchPostsByCategory(category);
  const post = findByTitle(posts, slug);

  if (post)
    return (
      <main className="max-lg:p-4 py-4 max-w-4xl">
        <article className="section rounded-md">
          <header className="mb-6">
            <h1>{post.title}</h1>
            <span className="">{post.createdAt.toLocaleDateString()}</span>
            <p className="mt-2">{post.description}</p>
          </header>
          <div className="">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    );
}
