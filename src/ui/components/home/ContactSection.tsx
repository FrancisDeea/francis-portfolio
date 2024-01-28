import { Lang } from "@/lib/definitions";
import getDictionary from "@/dictionaries/dictionaries";

import { LinkedinIcon, MailIcon, GithubIcon } from "@/ui/icons";

export default async function ContactSection({ lang }: { lang: Lang }) {
  const { home } = await getDictionary(lang);

  return (
    <section className="section bg-background2 max-lg:order-5">
      <div className="ct-flex-col h-full">
        <h2>{home.contact.title}</h2>
        <p>{home.contact.description}</p>
        <div className="ct-flex-row">
          <a
            href="https://www.linkedin.com/in/francis-bernal-full-stack-developer/"
            target="_blank"
            className="hover:scale-[1.2] transition-transform"
          >
            <LinkedinIcon style="w-8 h-8" />
          </a>
          <a
            href="mailto:francisbernal14@gmail.com"
            target="_blank"
            className="hover:scale-[1.2] transition-transform"
          >
            <MailIcon style="w-10 h-10" />
          </a>
          <a
            href="https://github.com/FrancisDeea"
            target="_blank"
            className="hover:scale-[1.2] transition-transform"
          >
            <GithubIcon style="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
