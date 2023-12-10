import { LogoutIcon } from "../icons";

export default function LogoutButton() {
    return (
        <button className="bg-slate-400 hover:bg-slate-500 rounded-lg text-left py-2 px-3 w-full font-bold flex items-center gap-2">
            <LogoutIcon /> Logout
        </button>
    )
}