import { Lang } from "@/lib/definitions";
import { HtmlIcon } from "../icons";
import getDictionary from "@/dictionaries/dictionaries";

export default async function LatestPosts({ lang }: { lang: Lang }) {
  const {
    home: { posts },
  } = await getDictionary(lang);

  return (
    <section className="section bg-background2 border-medium md:col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-2 max-lg:order-3">
      <div className="ct-flex-col">
        <h2>{posts.title}</h2>
        <article className="ct-flex-row rounded-md bg-dark p-4 h-min">
          <HtmlIcon size={10} />
          <div className="ct-flex-col gap-1">
            <h3 className=""> New content comming soon!</h3>
            <span className="text-sm">14/05/1995</span>
          </div>
        </article>
        <article className="ct-flex-row rounded-md bg-dark p-4 h-min overflow-x-scroll scrollbar-hide">
          <HtmlIcon size={10} />
          <div className="ct-flex-col gap-1">
            <h3 className="">New content comming soon!</h3>
            <span className="text-sm">14/05/1995</span>
          </div>
        </article>
        <article className="ct-flex-row rounded-md bg-dark p-4 h-min overflow-x-scroll scrollbar-hide">
          <HtmlIcon size={10} />
          <div className="ct-flex-col gap-1">
            <h3 className="">New content comming soon!</h3>
            <span className="text-sm">14/05/1995</span>
          </div>
        </article>
      </div>
    </section>
  );
}
