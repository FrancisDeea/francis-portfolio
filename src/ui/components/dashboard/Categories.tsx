import { Category } from "@prisma/client";

export async function Categories({ categories }: { categories: Category[] }) {
  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.id} className="ct-flex-row">
            <input
              type="checkbox"
              name="category"
              value={category.id}
              id={category.name}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        );
      })}
    </div>
  );
}
