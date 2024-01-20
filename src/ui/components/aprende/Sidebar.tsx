import { Lang } from "@/lib/definitions";
import Categories from "./Categories";
import Social from "./Social";

export default function Sidebar({ lang }: { lang: Lang }) {
  return (
    <aside className="section rounded-md border-medium border-2 bg-dark p-4 w-64 max-md:hidden">
      <div className="h-full flex flex-col justify-between gap-2">
        <div className="ct-flex-col gap-2">
          <span className="text-opposite font-medium">
            Elige una categoría:
          </span>
          <Categories lang={lang} />
        </div>
        <Social />
        <div className="border h-16">Publicidad</div>
        <div className="border h-16">Publicidad</div>
      </div>
    </aside>
  );
}
