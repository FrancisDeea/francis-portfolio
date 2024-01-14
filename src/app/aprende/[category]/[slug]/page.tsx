import { fetchAllPosts, fetchPostsByCategory } from "@/lib/dbdata";
import { findByTitle, getSlug } from "@/lib/utils";
import { HtmlIcon } from "@/ui/icons";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({
    category: post.category_name.toLowerCase(),
    slug: getSlug(post.title),
  }));
}

export default async function Page({
  params: { slug, category },
}: {
  params: { slug: string; category: string };
}) {
  console.log(category, slug);
  const posts = await fetchPostsByCategory(category);
  const post = findByTitle(posts, slug);

  if (post)
    return (
      <main className="flex-1 min-h-[calc(100vh-96px)]">
        <article
          id="post"
          className="section border-2 border-text2 rounded-md bg-dark"
        >
          <header className="mb-4 ct-flex-col">
            <h1 className="mb-1">{post.title}</h1>
            <div className="text-sm ct-flex-col gap-1 lg:ct-flex-row lg:justify-start">
              <span className="flex flex-row items-center gap-1 rounded-full border border-medium px-3 py-1 w-fit font-medium bg-dark">
                <HtmlIcon size={5} /> Estás aprendiendo HTML
              </span>
              <span className="">
                Fecha creación: {post.createdAt.toLocaleDateString()}
              </span>
            </div>
            <p className="text-opposite">{post.description}</p>
          </header>
          <div className="">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    );
}
