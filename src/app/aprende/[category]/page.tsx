import { fetchAllCategories } from "@/lib/dbdata";

const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    category: category.name,
  }));
}

export default function Page({
  params: category,
}: {
  params: { category: string };
}) {
  return <h1>Hello World</h1>;
}
