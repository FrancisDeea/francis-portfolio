import { Category } from "@prisma/client";

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <div>
      <span>Selecciona una categoria:</span>
      <div className="ct-flex-row mt-2">
        {categories.map((category) => {
          return (
            <div key={category.id} className="ct-flex-row">
              <input
                type="radio"
                name="category"
                value={category.name}
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
    </div>
  );
}
