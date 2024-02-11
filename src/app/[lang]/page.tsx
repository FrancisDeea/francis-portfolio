import LastProjects from "@/ui/components/LastProjects";
import LatestPosts from "@/ui/components/LatestPosts";
import SocialSection from "@/ui/components/SocialSection";
import IntroSection from "@/ui/components/home/IntroSection";
import ContactSection from "@/ui/components/home/ContactSection";

import { Lang } from "@/lib/definitions";
import { revalidatePath } from "next/cache";

export default function Index({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  return (
    <main className="w-[calc(100%-1.5rem)] pt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <IntroSection lang={lang} />

      <ContactSection lang={lang} />

      <LastProjects lang={lang} />

      <SocialSection lang={lang} />

      <LatestPosts lang={lang} />
    </main>
  );
}
