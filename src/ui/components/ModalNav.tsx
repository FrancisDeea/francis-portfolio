"use client";

import Nav from "./Nav";
import ThemeSelector from "./ThemeSelector";

import { CloseIcon, MenuIcon } from "../icons";
import { Lang } from "@/lib/definitions";
import LanguageSelector from "./LanguageSelector";

export default function ModalNav({ lang, nav }: { lang: Lang; nav: string }) {
  const handleModal = () => {
    const checkbox = document.getElementById("modalNav") as HTMLInputElement;

    if (checkbox.checked) {
      checkbox.checked = false;
    }
  };

  return (
    <div className="md:hidden">
      <label htmlFor="modalNav">
        <MenuIcon style="text-opposite" />
      </label>
      <input id="modalNav" type="checkbox" className="hidden peer" />

      <div
        className="
                    ct-flex-col justify-evenly fixed inset-0 bottom-0 p-8
                    bg-dark/90 backdrop-blur-md hidden 
                    animate-fade-up animate-duration-100
                    peer-checked:flex"
      >
        <label htmlFor="modalNav" className="cursor-pointer">
          <CloseIcon style="absolute right-5 top-5 text-opposite" />
        </label>

        <div className="ct-flex-col gap-1 text-text2">
          <span className="text-xl font-semibold">Francisco Javier Bernal</span>
          <span className="text-sm font-medium text-alert">
            Programador Web JavaScript
          </span>
          <hr className="border-opposite w-[90%]" />
        </div>

        <Nav
          customClass={null}
          handleModal={handleModal}
          nav={nav}
          lang={lang}
        />

        <div className="flex flex-col gap-2 items-start">
          <LanguageSelector lang={lang} />
          <ThemeSelector customClass={null} />
        </div>
      </div>
    </div>
  );
}
