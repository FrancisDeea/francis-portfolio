import { signOut } from "@/lib/auth";
import { LogoutIcon } from "../icons";

export default function LogoutButton() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="btn-link ct-flex-row max-lg:justify-center w-full gap-2">
        <LogoutIcon /> <span className="max-lg:hidden">Logout</span>
      </button>
    </form>
  );
}
