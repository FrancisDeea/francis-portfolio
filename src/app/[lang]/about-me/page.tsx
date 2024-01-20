import { GithubIcon, LinkedinIcon, MailIcon, findIcon } from "@/ui/icons";
import { PERSONAL_DATA } from "@/lib/personal-data";
import Sidebar from "@/ui/components/about-me/Sidebar";

export default function Page() {
  const { projects, education } = PERSONAL_DATA;

  return (
    <main id="resume" className="py-4 flex flex-row gap-4 w-[calc(100%-2rem)] max-w-[1200px]">
      <Sidebar />
      <div className="max-w-4xl ct-flex-col gap-6 bg-dark p-8 max-md:p-4 rounded-md">
        <section className="ct-flex-col gap-2">
          <h1>Francisco Javier Bernal Cabra</h1>
          <p>
            Programador Full Stack especializado en JavaScript y NextJS (React).
            +2 años de experiencia. Ubicado en Málaga, España.
          </p>
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
              Resume
            </a>
          </div>
        </section>

        <section>
          <h2>Sobre mí</h2>
          <div className="ct-flex-col gap-2">
            <p>
              ¡Soy Francis, tengo 28 años y resido en Málaga, España 🇪🇸 Me
              enfoco en JS y React para crear aplicaciones web modernas y
              minimalistas.
            </p>
            <p>
              Me encanta trabajar con TypeScript, NextJS(React), NodeJS y
              TailwindCSS. Herramientas que me permiten crear webs rápidas y
              escalables.
            </p>
            <p>
              Actualmente desarrollando un proyecto personal relacionado con la
              creación de contenido a la vez que busco una posición estable
              (Presencial en Málaga o Remoto)
            </p>
          </div>
        </section>

        <section>
          <h2>Projectos</h2>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {projects.map((item) => {
              return (
                <a href={item.url} key={item.id} target="_blank">
                  <article
                    id="project"
                    className="border border-opposite p-4 h-full flex flex-col justify-between gap-2"
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

        <section>
          <h2>Educación</h2>
          <div className="grid grid-cols-1 gap-4 max-md:grid-cols-1">
            {education.map((item) => {
              return (
                <article
                  id="curse"
                  className="bg-medium/20 rounded-md p-4 h-full flex flex-col justify-between gap-2"
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
                      Ver certificado
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
