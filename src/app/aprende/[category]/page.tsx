import { fetchAllCategories } from "@/lib/dbdata";
import LatestPosts from "@/ui/components/aprende/LatestPosts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
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
      <main className="max-w-full flex-1 min-h-[calc(100vh-96px)] p-4 rounded-md border-medium border-2 bg-background2">
        <header>
          <h1>{fullCategory.title}</h1>
          <p>{fullCategory.description}</p>
        </header>
        <LatestPosts quantity={6} category={fullCategory.name.toLowerCase()} />
      </main>
    );
}
