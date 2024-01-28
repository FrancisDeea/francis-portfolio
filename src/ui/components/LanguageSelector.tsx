"use client";

import { Lang } from "@/lib/definitions";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export default function LanguageSelector({
  lang,
  customClass,
}: {
  lang: Lang;
  customClass?: string;
}) {
  const path = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (lang === value) return;

    const newPath = path.replace(/\/es|\/en/, `/${value}`);
    router.push(newPath);
  };

  return (
    <div className={`flex flex-row gap-1 ${customClass}
    
    
    
    
    
    
    
    
    
    
    
    `}>
      <button
        onClick={handleClick}
        value="es"
        className={`${
          lang !== "es" ? "opacity-40 font-normal" : "opacity-100"
        } hover:scale-110 transition-transform tracking-wider text-opposite`}
      >
        ES 🇪🇸
      </button>
      <span>/</span>
      <button
        onClick={handleClick}
        value="en"
        className={`${
          lang !== "en" ? "opacity-40 font-normal" : "opacity-100"
        } hover:scale-110 transition-transform tracking-wider text-opposite`}
      >
        EN 🇬🇧
      </button>
    </div>
  );
}
