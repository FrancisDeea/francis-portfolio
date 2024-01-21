import Link from "next/link";

import Nav from "@/ui/components/Nav";
import ModalNav from "./ModalNav";
import ThemeSelector from "./ThemeSelector";

import { Lang } from "@/lib/definitions";
import getDictionary from "@/dictionaries/dictionaries";

export default async function Header({ lang }: { lang: Lang }) {
  const { nav } = await getDictionary(lang);

  return (
    <header className="section bg-medium border-none font-semibold rounded-md h-12 w-[calc(100%-2rem)] max-w-[1200px] m-auto mt-4 ct-flex-row justify-evenly">
      <Link href={`/${lang}`} className="text-opposite">
        &lt;FrancisBernal /&gt;
      </Link>
      <Nav
        customClass="max-md:hidden"
        handleModal={undefined}
        lang={lang}
        nav={nav}
      />
      <ThemeSelector customClass="max-md:hidden" />
      <ModalNav lang={lang} nav={nav} />
    </header>
  );
}
