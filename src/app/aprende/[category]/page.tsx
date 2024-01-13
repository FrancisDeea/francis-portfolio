import { fetchAllCategories } from "@/lib/dbdata";

export const dynamicParams = false

// export async function generateStaticParams() {
//   const categories = await fetchAllCategories();

//   return categories.map((category) => ({
//     category: category.name,
//   }));
// }

export default function Page({
  params: { category },
}: {
  params: { category: number };
}) {
  return <h1>{category}</h1>;
}
