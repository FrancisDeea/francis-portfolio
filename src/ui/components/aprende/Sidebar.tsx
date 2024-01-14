import Categories from "./Categories";
import Social from "./Social";

export default function Sidebar() {
  return (
    <aside className="section rounded-md border-medium border-2 bg-dark p-4 w-64 max-md:hidden">
      <div className="h-full flex flex-col justify-between gap-2">
        <div className="ct-flex-col gap-2">
          <span className="">Elige una categoría:</span>
          <Categories />
        </div>
        <Social />
        <div className="border h-16">Publicidad</div>
        <div className="border h-16">Publicidad</div>
      </div>
    </aside>
  );
}
