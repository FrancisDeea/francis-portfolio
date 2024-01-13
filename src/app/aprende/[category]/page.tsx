import { fetchAllCategories } from "@/lib/dbdata";

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    category: category.name,
  }));
}

export default function Page({
  params: { category },
}: {
  params: { category: string };
}) {
  return <h1>{category}</h1>;
}
