import getDictionary from "@/dictionaries/dictionaries";
import { Lang } from "@/lib/definitions";
import LatestPosts from "@/ui/components/aprende/LatestPosts";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { lang } }: { params: { lang: Lang } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title:
      lang === "es"
        ? "Aprende Programación Web | Cursos Gratuitos para principiantes"
        : "Learn Web Programming | Free Courses for beginners",
    description:
      lang === "es"
        ? "Aprende a desarrollar y programar tus propias aplicaciones web desde cero. Cursos de HTML, CSS, JS, React, Next, Tailwind y mucho más..."
        : "Learn how to develop and program your own web applications from scratch. Courses of HTML, CSS, JS, React, Next, Tailwind y much more...",
    keywords: ["aprende", "programación", "web", "cursos", "gratis"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const { learn } = await getDictionary(lang);

  return (
    <main className="max-w-full flex-1 min-h-[calc(100vh-96px)] p-4 rounded-md border-medium border-2 bg-background2 flex flex-col gap-4">
      <header className="ct-flex-col gap-2">
        <h1 className="text-opposite">{learn.title}</h1>
        <p className="text-text font-medium">{learn.description1}</p>
        <p className="text-text font-medium">{learn.description2}</p>
        <p className="text-text font-medium">{learn.description3}</p>
      </header>
      <div>
        <span className="font-semibold text-3xl max-sm:text-2xl text-opposite">
          {learn.lessons.subtitle}
        </span>
        <LatestPosts
          quantity={6}
          category={undefined}
          dict={learn.lessons}
          lang={lang}
        />
      </div>
    </main>
  );
}
