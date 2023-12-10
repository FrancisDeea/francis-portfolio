import Link from "next/link"

export default function NavButton({ path, value, icon, customStyle }: { path: string, value: string, icon: React.ReactNode | null, customStyle: string | null }) {
    return (
        <Link href={path} className={`bg-slate-400 hover:bg-slate-500 rounded-lg py-2 px-3 font-bold flex items-center gap-2 ${customStyle ?? ""}`}>{icon} {value}</Link>
    )
}