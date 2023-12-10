import Link from "next/link"

export default function NavButton({ path, value, icon }: { path: string, value: string, icon: React.ReactNode }) {
    return (
        <Link href={path} className="bg-slate-400 hover:bg-slate-500 rounded-lg py-2 px-3 w-full font-bold flex items-center gap-2">{icon} {value}</Link>
    )
}