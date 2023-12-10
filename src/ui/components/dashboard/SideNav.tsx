import Nav from "./Nav"
import LogoutButton from "../LogoutButton"

export default function SideNav() {
    return (
        <aside className="bg-slate-200 w-64 p-4 rounded-2xl">
            <div className="aspect-square bg-blue-500 rounded-lg mb-3 p-3 grid place-content-end">
                <span className="font-bold text-xl">Francis[dev]</span>
            </div>
            <Nav />
        </aside>
    )
}