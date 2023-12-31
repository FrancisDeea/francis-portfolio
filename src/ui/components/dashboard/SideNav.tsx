import Nav from "./Nav"
import LogoutButton from "../LogoutButton"

export default function SideNav() {
    return (
        <aside className="lg:section lg:bg-dark lg:p-4 lg:w-64 lg:flex-shrink-0 ">
            <div className="max-lg:hidden aspect-square bg-medium rounded-lg mb-3 p-3 grid place-content-end">
                <span className="font-bold text-xl">Francis[dev]</span>
            </div>
            <Nav />
        </aside>
    )
}