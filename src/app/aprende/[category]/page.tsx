import { fetchAllCategories } from "@/lib/dbdata";

export const dynamicParams = false

// export async function generateStaticParams() {
//   const categories = await fetchAllCategories();

//   return categories.map((category) => ({
//     category: category.name,
//   }));
// }

export default function Page() {
  return <h1>test</h1>;
}
