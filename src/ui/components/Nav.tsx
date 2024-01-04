import Link from "next/link"
import { MouseEventHandler } from "react"

export default function Nav({ customClass, handleModal }: { customClass: string | null, handleModal: undefined | MouseEventHandler<HTMLAnchorElement> }) {

    return (
        <nav className={`max-md:ct-flex-col max-md:text-2xl ct-flex-row gap-6 justify-center ${customClass}`}>
            <Link onClick={handleModal} href="/" className="hover:scale-110 transition-transform">Home</Link>
            <Link onClick={handleModal} href="" className="hover:scale-110 transition-transform">About me</Link>
            <Link onClick={handleModal} href="/projects" className="hover:scale-110 transition-transform">Projects</Link>
            <Link onClick={handleModal} href="" className="hover:scale-110 transition-transform">Learn</Link>
        </nav>
    )
}