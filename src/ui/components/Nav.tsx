import Link from "next/link";
import { MouseEventHandler } from "react";
import { Lang } from "@/lib/definitions";

export default function Nav({
  customClass,
  handleModal,
  lang,
}: {
  customClass: string | null;
  handleModal: undefined | MouseEventHandler<HTMLAnchorElement>;
  lang: Lang;
}) {
  return (
    <nav
      className={`max-md:ct-flex-col max-md:items-start max-md:text-2xl ct-flex-row gap-6 justify-center text-opposite ${customClass}`}
    >
      <Link
        onClick={handleModal}
        href={`/${lang}`}
        className="hover:scale-110 transition-transform"
      >
        Home
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/about-me`}
        className="hover:scale-110 transition-transform"
      >
        About me
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/projects`}
        className="hover:scale-110 transition-transform"
      >
        Projects
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/aprende`}
        className="hover:scale-110 transition-transform"
      >
        Learn
      </Link>
    </nav>
  );
}
