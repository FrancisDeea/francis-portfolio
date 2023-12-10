import SideNav from "@/ui/components/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <section className="flex flex-row">
            <SideNav />
            {children}
        </section>
    )
}