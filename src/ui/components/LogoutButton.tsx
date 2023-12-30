import { LogoutIcon } from "../icons";

export default function LogoutButton() {
    return (
        <button className="btn-link ct-flex-row max-lg:justify-center w-full gap-2">
            <LogoutIcon /> <span className="max-lg:hidden">Logout</span>
        </button>
    )
}