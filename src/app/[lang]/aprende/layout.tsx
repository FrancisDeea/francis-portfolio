import { fetchAllCategories } from "@/lib/dbdata";
import { Lang } from "@/lib/definitions";
import Sidebar from "@/ui/components/aprende/Sidebar";
import SidebarMobile from "@/ui/components/aprende/SidebarMobile";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { lang } }: { params: { lang: Lang } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: {
      template: "%s | Francis Bernal",
      default:
        lang === "es"
          ? "Aprende Programación Web | Cursos Gratuitos desde cero"
          : "Learn Web Programming | Free Courses for beginners",
    },
    description:
      lang === "es"
        ? "Cursos gratuitos desde cero para aprender programación web: HTML, CSS, JavaScript, React, Next y mucho más..."
        : "Free courses from scratch to learn web programming: HTML, CSS, JavaScript, React, Next and much more...",
    keywords: ["Programación", "web", "JavaScript", "Aprende", "Cursos"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const categories = await fetchAllCategories();

  return (
    <div className="mt-4 flex flex-row min-h-[calc(100dvh-96px)] gap-4 w-[calc(100%-1.5rem)] max-w-[1200px] m-auto">
      <Sidebar lang={lang} />
      {children}
      <SidebarMobile categories={categories} lang={lang} />
    </div>
  );
}
