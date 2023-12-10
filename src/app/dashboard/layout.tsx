import SideNav from "@/ui/components/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="flex flex-row p-4 gap-4">
            <SideNav />
            {children}
        </main>
    )
}