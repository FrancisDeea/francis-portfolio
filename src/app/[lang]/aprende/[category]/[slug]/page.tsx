import { fetchAllPosts, fetchPostsByCategory } from "@/lib/dbdata";
import { Lang } from "@/lib/definitions";
import { findByTitle, getSlug } from "@/lib/utils";
import { HtmlIcon, CssIcon, JavascriptIcon } from "@/ui/icons";
import { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

const icons = {
  HTML: <HtmlIcon size={5} />,
  CSS: <CssIcon size={5} />,
  JavaScript: <JavascriptIcon size={5} />,
};

export async function generateMetadata(
  {
    params: { lang, slug, category },
  }: { params: { lang: Lang; slug: string; category: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const posts = await fetchPostsByCategory(category);
  const post = findByTitle(posts, slug);
  // const title = lang === "es" ? post?.title_es : post?.title_en;
  // const description = lang === "es" ? post?.description_es : post?.description_en;
  return {
    title: lang === "es" ? post?.title_es : post?.title_en ?? post?.title_es,
    description:
      lang === "es"
        ? post?.description_es
        : post?.description_en ?? post?.description_es,
    keywords: ["Programación", "web", "curso", `${category}`, "Málaga"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({
    category: post.category_name.toLowerCase(),
    slug: getSlug(post.title_es),
  }));
}

export default async function Page({
  params: { slug, category, lang },
}: {
  params: { slug: string; category: string; lang: Lang };
}) {
  const posts = await fetchPostsByCategory(category);
  const post = findByTitle(posts, slug);

  if (post) {
    const title =
      lang === "es" ? post?.title_es : post?.title_en ?? post?.title_es;
    const description =
      lang === "es"
        ? post?.description_es
        : post?.description_en ?? post?.description_es;
    const content =
      lang === "es" ? post?.content_es : post?.content_en ?? post?.content_es;
    const categoryFormated = post?.category_name;
    const icon = icons[categoryFormated as keyof typeof icons];
    return (
      <main className="flex-1 min-h-[calc(100vh-96px)]">
        <article
          id="post"
          className="section rounded-md border-medium border-2 bg-background2"
        >
          <header className="mb-4 ct-flex-col">
            <h1 className="mb-1 text-opposite">{title}</h1>
            <div className="text-sm ct-flex-col gap-1 lg:ct-flex-row lg:justify-start">
              <span className="flex flex-row items-center gap-1 rounded-full border border-medium px-3 py-1 w-fit font-medium bg-dark">
                {icon}{" "}
                {lang === "es" ? "Estas aprendiendo" : "You are learning"}{" "}
                {categoryFormated}
              </span>
              <span className="">
              {lang === "es" ? "Fecha creación" : "Created at"}: {post.createdAt.toLocaleDateString()}
              </span>
            </div>
            <p className="!text-text font-medium">{description}</p>
          </header>
          <div className="">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    );
  }
}
