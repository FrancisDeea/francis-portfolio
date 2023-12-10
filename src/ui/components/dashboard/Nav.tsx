import LogoutButton from "../LogoutButton";
import NavButton from "../NavButton";
import { ProjectIcon, PostIcon } from '../../icons'

export default function Nav() {
    return (
        <nav className="flex flex-col justify-between gap-3">
                <NavButton path="/projects" value="Proyects" icon={<ProjectIcon />} />
                <NavButton path="/posts" value="Posts" icon={<PostIcon />} />
                <LogoutButton />
        </nav>
    )
}