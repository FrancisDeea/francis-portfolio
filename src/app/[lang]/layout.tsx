import { montserrat } from "@/ui/fonts";
import "../globals.css";

import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

import type { Metadata, ResolvingMetadata } from "next";
import { Lang } from "@/lib/definitions";

export async function generateMetadata({
  params: { lang },
  parent,
}: {
  params: { lang: Lang };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  return {
    title: {
      template: "%s | Francis Bernal",
      default:
        lang === "es"
          ? "Desarrollo Web Full Stack | Aprende Javascript y React | Francis Bernal"
          : "Full Stack Web Developer | Learn Javascript y React | Francis Bernal",
    },
    description:
      lang === "es"
        ? "Programador Full Stack especializado en JavaScript y NextJS (React). Aprende programación web. Málaga, España."
        : "Full Stack Programmer specialized in JavaScript and NextJS (React). Learn web programming. Malaga, Spain.",
    keywords: ["Programador", "web", "JavaScript", "React", "Málaga"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default function RootLayout({
  params,
  children,
}: {
  params: { lang: Lang };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.lang} className="dark">
      <body className={`${montserrat.className}`}>
        <Header lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
