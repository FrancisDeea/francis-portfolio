import { fetchAllCategories } from "@/lib/dbdata";

// export async function generateStaticParams() {
//   const categories = await fetchAllCategories();

//   return categories.map((category) => ({
//     category: category.name,
//   }));
// }

const dynamicParams = false;
export { dynamicParams };

export default function Page({
  params: { category },
}: {
  params: { category: string };
}) {
  console.log(category);
  return <h1>Hello World</h1>;
}
