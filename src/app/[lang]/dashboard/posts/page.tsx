import { CreateIcon } from "@/ui/icons";
import { Suspense } from "react";

import NavButton from "@/ui/components/NavButton";
import Posts from "@/ui/components/dashboard/Posts";
import Skeleton from "@/ui/skeletons/dashboard/Posts";
import { Lang } from "@/lib/definitions";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  return (
    <section className="section w-full overflow-y-scroll scrollbar-hide">
      <div className="ct-flex-row justify-between items-end mb-4">
        <h1 className="">Francis&apos;s Projects</h1>
        <NavButton
          path={`/${lang}/dashboard/posts/create`}
          value="Create post"
          icon={<CreateIcon />}
          customStyle="w-max"
        />
      </div>

      <Suspense fallback={<Skeleton />}>
        <Posts />
      </Suspense>
    </section>
  );
}
