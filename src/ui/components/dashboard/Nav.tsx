import LogoutButton from "../LogoutButton";
import NavButton from "../NavButton";
import { ProjectIcon, PostIcon } from "../../icons";
import { Lang } from "@/lib/definitions";

export default function Nav({ lang }: { lang: Lang }) {
  return (
    <nav className="ct-flex-row max-lg:m-auto lg:ct-flex-col">
      <NavButton
        path={`/${lang}/dashboard/projects`}
        value="Proyects"
        icon={<ProjectIcon />}
      />
      <NavButton
        path={`/${lang}/dashboard/posts`}
        value="Posts"
        icon={<PostIcon />}
      />
      <LogoutButton />
    </nav>
  );
}
