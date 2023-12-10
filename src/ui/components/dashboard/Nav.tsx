import LogoutButton from "../LogoutButton";
import NavButton from "../NavButton";
import { ProjectIcon, PostIcon } from '../../icons'

export default function Nav() {
    return (
        <nav className="flex flex-col justify-between gap-3">
                <NavButton path="/dashboard/projects" value="Proyects" icon={<ProjectIcon />} />
                <NavButton path="/dashboard/posts" value="Posts" icon={<PostIcon />} />
                <LogoutButton />
        </nav>
    )
}