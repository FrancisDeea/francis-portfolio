import getDictionary from "@/dictionaries/dictionaries";
import { Lang } from "@/lib/definitions";

export default async function SocialSection({ lang }: { lang: Lang }) {
  const {
    home: { social },
  } = await getDictionary(lang);

  return (
    <section className="section bg-background2 ct-flex-col justify-evenly">
      <h2>{social.title}</h2>
      <div className="ct-flex-col w-full">
        <a href="" className="btn-social tiktok-style">
          TikTok
        </a>
        <a href="" className="btn-social instagram-style">
          Instagram
        </a>
        <a href="" className="btn-social youtube-style">
          Youtube
        </a>
      </div>
    </section>
  );
}
