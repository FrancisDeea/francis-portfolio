import LogoutButton from "../LogoutButton";
import NavButton from "../NavButton";
import { ProjectIcon, PostIcon } from '../../icons'

export default function Nav() {
    return (
        <nav className="ct-flex-row max-lg:m-auto lg:ct-flex-col">
                <NavButton path="/dashboard/projects" value="Proyects" icon={<ProjectIcon />} />
                <NavButton path="/dashboard/posts" value="Posts" icon={<PostIcon />}  />
                <LogoutButton />
        </nav>
    )
}