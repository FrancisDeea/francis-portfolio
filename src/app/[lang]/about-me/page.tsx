import { GithubIcon, LinkedinIcon, MailIcon, findIcon } from "@/ui/icons";
import { PERSONAL_DATA } from "@/lib/personal-data";
import Sidebar from "@/ui/components/about-me/Sidebar";
import { Lang } from "@/lib/definitions";
import getDictionary from "@/dictionaries/dictionaries";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params: { lang },
  parent,
}: {
  params: { lang: Lang };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  return {
    title:
      lang === "es"
        ? "Sobre mí | Desarrollador Web JavaScript"
        : "About me | JavaScript Web Developer",
    description:
      lang === "es"
        ? "Desarrollador de aplicacione web, basadas en JavaScript y NextJS (React). +2 años de experiencia. Ubicado en Málaga, España."
        : "Web application developer specialized in JavaScript and NextJS (React). +2 years experience. Malaga, Spain.",
    keywords: ["Programador", "web", "JavaScript", "React", "Málaga"],
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
  const { projects, education } = PERSONAL_DATA;
  const { aboutMe } = await getDictionary(lang);
  console.log(aboutMe);

  return (
    <main
      id="resume"
      className="py-4 flex flex-row gap-4 w-[calc(100%-1.5rem)] max-w-[1200px]"
    >
      <Sidebar dict={aboutMe} />
      <div className="max-w-4xl ct-flex-col gap-6">
        <section className="ct-flex-col gap-2 section bg-dark border-medium">
          <h1>Francisco Javier Bernal Cabra</h1>
          <p>{aboutMe.description}</p>
          <div className="ct-flex-row">
            <a
              href="http://"
              className="h-9 w-9 border-2 border-medium grid place-content-center rounded-sm hover:bg-medium/50 transition-colors"
            >
              <LinkedinIcon style="h-5 w-5 text-opposite/70" />
            </a>
            <a
              href="http://"
              className="h-9 w-9 border-2 border-medium grid place-content-center rounded-sm hover:bg-medium/50 transition-colors"
            >
              <MailIcon style="h-5 w-5 text-opposite/70" />
            </a>
            <a
              href="http://"
              className="h-9 w-9 border-2 border-medium grid place-content-center rounded-sm hover:bg-medium/50 transition-colors"
            >
              <GithubIcon style="h-5 w-5 text-opposite/70" />
            </a>
            <a
              href="http://"
              className="h-9 px-2 border-2 border-medium grid place-content-center rounded-sm hover:bg-medium/50 transition-colors font-semibold text-sm"
            >
              {aboutMe.cv}
            </a>
          </div>
        </section>

        <section className="section bg-background2 border-medium">
          <h2>{aboutMe.subtitle1}</h2>
          <div className="ct-flex-col gap-2">
            <p>{aboutMe.subdescription1}</p>
            <p>{aboutMe.subdescription2}</p>
            <p>{aboutMe.subdescription3}</p>
          </div>
        </section>

        <section className="section bg-background2 border-medium">
          <h2>{aboutMe.subtitle2}</h2>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {projects.map((item) => {
              return (
                <a href={item.url} key={item.id} target="_blank">
                  <article
                    id="project"
                    className="bg-dark rounded-md p-4 h-full flex flex-col justify-between gap-2"
                  >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="ct-flex-row gap-2">
                      {item.stack.map((item) => {
                        const icon = findIcon(item);
                        return icon;
                      })}
                    </div>
                  </article>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section bg-background2 border-medium">
          <h2>{aboutMe.subtitle3}</h2>
          <div className="grid grid-cols-1 gap-4 max-md:grid-cols-1">
            {education.map((item) => {
              return (
                <article
                  id="curse"
                  className="bg-dark rounded-md p-4 h-full flex flex-col justify-between gap-2"
                  key={item.name}
                >
                  <div className="flex flex-col gap-0">
                    <h3>{item.name}</h3>
                    <span>{item.date}</span>
                  </div>
                  <p>{item.description}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      className="btn-link text-sm"
                    >
                      {aboutMe.certificationButton}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
