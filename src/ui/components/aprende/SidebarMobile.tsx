"use client";

import { Lang } from "@/lib/definitions";
import { CaretIcon, findIcon } from "@/ui/icons";
import { Category } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function SidebarMobile({
  categories,
  lang,
}: {
  categories: Category[];
  lang: Lang;
}) {
  const path = usePathname();
  const category = path.match(/(\/\w+)$/)![1].slice(1).toUpperCase();
  const asideRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    asideRef.current?.classList.toggle("h-[200px]");
    linkRef.current?.classList.toggle("hidden");
    iconRef.current?.classList.toggle("rotate-180");
  };

  return (
    <aside
      ref={asideRef}
      onClick={handleClick}
      className="fixed bg-dark p-1 w-screen h-8 bottom-0 left-0 rounded-t-[3rem] transition-all overflow-hidden md:hidden"
    >
      <nav className="flex flex-col items-center h-full">
        <span className="font-semibold text-center w-full cursor-pointer flex items-center justify-center gap-1">
          {lang === "es" ? "Actualmente en: " : "Currently in: "}
          <span className="text-yellow-500">
            {category === "JAVASCRIPT" ? "JavaScript" : category}
          </span>
          <i
            className="transition-transform animate-duration-500"
            ref={iconRef}
          >
            <CaretIcon style="size-5" />
          </i>
        </span>
        <div
          ref={linkRef}
          className="ct-flex-col h-full hidden animate-fade animate-duration-300"
        >
          {categories.map((category) => {
            const slug = category.name.toLowerCase();
            const icon = findIcon(category.name);
            return (
              <Link
                href={`/${lang}/aprende/${slug}`}
                key={category.id}
                className="font-semibold flex flex-row items-center gap-2 rounded-md py-1 px-2 bg-medium w-full text-opposite text-base text-center hover:scale-90 transition-transform"
              >
                {icon}
                {category.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
