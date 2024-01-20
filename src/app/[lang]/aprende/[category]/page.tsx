import { fetchAllCategories } from "@/lib/dbdata";
import { Lang } from "@/lib/definitions";
import LatestPosts from "@/ui/components/aprende/LatestPosts";

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
  params: { category },
}: {
  params: { category: string };
}) {
  const fullCategory = (await fetchAllCategories()).find(
    (item) => item.name.toLowerCase() === category
  );

  if (fullCategory)
    return (
      <main className="max-w-full flex-1 min-h-[calc(100vh-96px)] p-4 rounded-md border-medium border-2 bg-background2 flex flex-col gap-4">
        <header className="ct-flex-col gap-2">
          <h1 className="text-opposite">{fullCategory.title}</h1>
          <p className="text-text font-medium">{fullCategory.description}</p>
        </header>
        <div>
          <span className="font-semibold text-3xl max-sm:text-2xl text-opposite">
            Lecciones
          </span>
          <LatestPosts
            quantity={6}
            category={fullCategory.name.toLowerCase()}
          />
        </div>
      </main>
    );
}
