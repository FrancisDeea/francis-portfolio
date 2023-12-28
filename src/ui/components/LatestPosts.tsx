import { HtmlIcon } from "../icons"

export default async function LatestPosts() {

    return (
        <section className="section bg-red-950 border-dark lg:col-start-2 lg:col-span-2">
            <div className="ct-flex-col">
                <h2>Latest Posts</h2>
                <article className="ct-flex-row rounded-md bg-slate-950 p-4 h-min overflow-x-scroll scrollbar-hide">
                    <HtmlIcon size={10} />
                    <div className="ct-flex-col gap-1">
                        <h3 className="whitespace-nowrap">Que son los headings y como usarlos</h3>
                        <span className="text-sm">14/05/1995</span>
                    </div>
                </article>
                <article className="ct-flex-row rounded-md bg-dark p-4 h-min overflow-x-scroll scrollbar-hide">
                    <HtmlIcon size={10} />
                    <div className="ct-flex-col gap-1">
                        <h3 className="whitespace-nowrap">Que son los headings y como usarlos</h3>
                        <span className="text-sm">14/05/1995</span>
                    </div>
                </article>
                <article className="ct-flex-row rounded-md bg-dark p-4 h-min overflow-x-scroll scrollbar-hide">
                    <HtmlIcon size={10} />
                    <div className="ct-flex-col gap-1">
                        <h3 className="whitespace-nowrap">Que son los headings y como usarlos</h3>
                        <span className="text-sm">14/05/1995</span>
                    </div>
                </article>
            </div>
        </section>
    )
}