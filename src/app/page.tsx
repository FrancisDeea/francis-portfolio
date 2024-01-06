/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LinkedinIcon, MailIcon, GithubIcon } from "@/ui/icons";
import LastProjects from "@/ui/components/LastProjects";
import LatestPosts from "@/ui/components/LatestPosts";
import SocialSection from "@/ui/components/SocialSection";
import { revalidatePath } from "next/cache";

export default function Index() {
  return (
    <main className="max-lg:p-4 py-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <section className="section bg-dark ct-flex-col min-[550px]:flex-row md:col-span-2">
        <img
          src="/profile-cv.jpg"
          alt=""
          className="w-full max-w-[200px] m-auto object-cover aspect-square rounded-full border-2 border-medium"
        />
        <div className="ct-flex-col">
          <h1 className="text-text2 flex flex-col">
            Programación Web{" "}
            <span>
              Aprende{" "}
              <span className="bg-yellow-500 text-black px-2 rounded-sm">
                JS
              </span>{" "}
              y{" "}
              <span className="bg-[#149eca] text-slate-50 px-2 rounded-sm">
                React
              </span>
            </span>{" "}
            <span>Francis[dev]</span>
          </h1>
          <p>
            Especializado en JavaScript y NextJS (React). Desarrollo de
            aplicaciones web modernas de alto rendimiento.
          </p>
          <div className="ct-flex-row">
            <Link href="" className="btn-link">
              Contacto
            </Link>
            <Link href="" className="btn-link">
              Aprende
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-background2">
        <div className="ct-flex-col h-full">
          <h2>Quiero colaborar en tu proyecto</h2>
          <p>¿Necesitas un programador o tienes alguna duda?</p>
          <div className="ct-flex-row">
            <a href="" target="_blank" className="">
              <LinkedinIcon style="w-8 h-8" />
            </a>
            <a href="" target="_blank" className="">
              <MailIcon style="w-10 h-10" />
            </a>
            <a href="" target="_blank" className="">
              <GithubIcon style="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      <SocialSection />

      <LatestPosts />

      <LastProjects />
    </main>
  );
}
