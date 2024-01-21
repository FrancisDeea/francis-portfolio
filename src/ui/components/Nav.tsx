import Link from "next/link";
import { Lang } from "@/lib/definitions";

export default async function Nav({
  customClass,
  handleModal,
  lang,
  nav,
}: {
  customClass: string | null;
  handleModal: undefined | React.ReactEventHandler;
  lang: Lang;
  nav: string;
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
        {nav[1]}
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/about-me`}
        className="hover:scale-110 transition-transform"
      >
        {nav[2]}
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/projects`}
        className="hover:scale-110 transition-transform"
      >
        {nav[3]}
      </Link>
      <Link
        onClick={handleModal}
        href={`/${lang}/aprende`}
        className="hover:scale-110 transition-transform"
      >
        {nav[4]}
      </Link>
    </nav>
  );
}
