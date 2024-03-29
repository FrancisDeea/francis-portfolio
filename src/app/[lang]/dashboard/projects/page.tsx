import { CreateIcon } from "@/ui/icons";
import { Suspense } from "react";

import NavButton from "@/ui/components/NavButton";
import Projects from "@/ui/components/dashboard/Projects";
import Skeleton from "@/ui/skeletons/dashboard/Projects";
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
          path={`/${lang}/dashboard/projects/create`}
          value="Create project"
          icon={<CreateIcon />}
          customStyle="w-max"
        />
      </div>

      <Suspense fallback={<Skeleton />}>
        <Projects />
      </Suspense>
    </section>
  );
}
