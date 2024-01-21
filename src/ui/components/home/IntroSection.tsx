/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Lang } from "@/lib/definitions";
import getDictionary from "@/dictionaries/dictionaries";

export default async function IntroSection({ lang }: { lang: Lang }) {
  const { home } = await getDictionary(lang);

  return (
    <section className="section bg-dark ct-flex-col min-[550px]:flex-row md:col-span-2">
      <img
        src="/profile-cv.jpg"
        alt=""
        className="w-full max-w-[200px] m-auto object-cover aspect-square rounded-full border-2 border-medium"
      />
      <div className="ct-flex-col">
        <h1 className="text-text2 flex flex-col">
          {home.intro.title[1]}
          <span>
            {home.intro.title[2]}{" "}
            <span className="bg-yellow-500 text-black px-2 rounded-sm">
              {home.intro.title[3]}
            </span>{" "}
            {home.intro.title[4]}{" "}
            <span className="bg-[#149eca] text-slate-50 px-2 rounded-sm">
              {home.intro.title[5]}
            </span>
          </span>
          <span>{home.intro.title[6]}</span>
        </h1>
        <p>{home.intro.description}</p>
        <div className="ct-flex-row">
          <Link href="" className="btn-link">
            {home.intro.buttons[1]}
          </Link>
          <Link href={`/${lang}/aprende`} className="btn-link">
            {home.intro.buttons[2]}
          </Link>
        </div>
      </div>
    </section>
  );
}
