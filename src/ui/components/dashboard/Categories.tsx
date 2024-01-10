import { Category } from "@prisma/client";

export async function Categories({ categories }: { categories: Category[] }) {
  return (
    <div>
      <span>Selecciona una categoria:</span>
      {categories.map((category) => {
        return (
          <div key={category.id} className="ct-flex-row">
            <input
              type="radio"
              name="category"
              value={category.id}
              id={category.name}
              className="peer hidden"
            />
            <label
              htmlFor={category.name}
              className="peer-checked:border-green-400 btn-link px-2 py-1"
            >
              {category.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
