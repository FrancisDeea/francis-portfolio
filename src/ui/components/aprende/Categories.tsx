import Link from "next/link";
import { fetchAllCategories } from "@/lib/dbdata";
import { findIcon } from "@/ui/icons";

export default async function Categories() {
  const categories = await fetchAllCategories();

  return (
    <div className="ct-flex-col gap-2">
      {categories.map((category) => {
        const slug = category.name.toLowerCase();
        const icon = findIcon(category.name);
        return (
          <Link
            href={`/aprende/${slug}`}
            key={category.id}
            className="font-semibold flex flex-row items-center gap-2"
          >
            {icon}
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
