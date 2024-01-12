import { fetchAllCategories } from "@/lib/dbdata";

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    category: category.name,
  }));
}
