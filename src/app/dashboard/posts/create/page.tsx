import CreatePostForm from "@/ui/components/dashboard/CreatePostForm";
import { fetchAllCategories } from "@/lib/dbdata";
import { Category } from "@prisma/client";

export default async function Create() {
  const categories: Category[] = await fetchAllCategories();

  return (
    <section className="section w-full h-full ct-flex-col">
      <h1 className="">Create a new post</h1>
      <CreatePostForm categories={categories} />
    </section>
  );
}
