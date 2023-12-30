import LogoutButton from "../LogoutButton";
import NavButton from "../NavButton";
import { ProjectIcon, PostIcon } from '../../icons'

export default function Nav() {
    return (
        <nav className="ct-flex-row lg:ct-flex-col">
                <NavButton path="/dashboard/projects" value="Proyects" icon={<ProjectIcon />} customStyle={null} />
                <NavButton path="/dashboard/posts" value="Posts" icon={<PostIcon />} customStyle={null} />
                <LogoutButton />
        </nav>
    )
}