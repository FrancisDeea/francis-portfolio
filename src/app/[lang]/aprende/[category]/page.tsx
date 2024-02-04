import getDictionary from "@/dictionaries/dictionaries";
import { fetchAllCategories } from "@/lib/dbdata";
import { Lang } from "@/lib/definitions";
import LatestPosts from "@/ui/components/aprende/LatestPosts";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { lang, category } }: { params: { lang: Lang; category: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const fullCategory = (await fetchAllCategories()).find(
    (item) => item.name.toLowerCase() === category
  );
  const title = lang === "es" ? fullCategory?.title_es : fullCategory?.title_en;
  const description =
    lang === "es" ? fullCategory?.description_es : fullCategory?.description_en;
  return {
    title: title,
    description: description,
    keywords: ["Programación", "web", "curso", `${category}`, "Málaga"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    lang: lang,
    category: category.name.toLowerCase(),
  }));
}

export default async function Page({
  params: { category, lang },
}: {
  params: { category: string; lang: Lang };
}) {
  const fullCategory = (await fetchAllCategories()).find(
    (item) => item.name.toLowerCase() === category
  );
  const {
    learn: { lessons },
  } = await getDictionary(lang);

  if (fullCategory)
    return (
      <main className="max-w-full flex-1 min-h-[calc(100vh-96px)] p-4 rounded-md border-medium border-2 bg-background2 flex flex-col gap-4">
        <header className="ct-flex-col gap-2">
          <h1 className="text-opposite">
            {lang === "es" ? fullCategory.title_es : fullCategory.title_en}
          </h1>
          <p className="text-text font-medium">
            {lang === "es"
              ? fullCategory.description_es
              : fullCategory.description_en}
          </p>
        </header>
        <div>
          <span className="font-semibold text-3xl max-sm:text-2xl text-opposite">
            {lessons.subtitle}
          </span>
          <LatestPosts
            quantity={6}
            category={fullCategory.name.toLowerCase()}
            dict={lessons}
            lang={lang}
          />
        </div>
      </main>
    );
}
