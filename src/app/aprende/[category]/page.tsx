import { fetchAllCategories } from "@/lib/dbdata";

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    category: category.name,
  }));
}

export default function Page() {
    return (
        <h1>Hello World</h1>
    )
}
