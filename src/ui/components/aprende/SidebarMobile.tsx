"use client";

import { Lang } from "@/lib/definitions";
import { findIcon } from "@/ui/icons";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SidebarMobile({
  categories,
  lang,
}: {
  categories: Category[];
  lang: Lang;
}) {
  const asideRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    asideRef.current?.classList.toggle("h-[200px]");
    linkRef.current?.classList.toggle("hidden");
  };

  return (
    <aside
      ref={asideRef}
      onClick={handleClick}
      className="fixed bg-dark p-1 w-screen h-8 bottom-0 left-0 rounded-t-[3rem] transition-all overflow-hidden md:hidden"
    >
      <nav className="flex flex-col items-center h-full">
        <span className="font-semibold text-center block w-full cursor-pointer">
          Estas en: HTML
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
