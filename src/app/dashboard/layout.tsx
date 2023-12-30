import { NotificationContextProvider } from "@/state/notificationContext"
import Notification from "@/ui/components/Notification"
import SideNav from "@/ui/components/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="ct-flex-col lg:ct-flex-row lg:items-stretch lg:min-h-screen">
            <NotificationContextProvider>
                <Notification />
                <SideNav />
                {children}
            </NotificationContextProvider>
        </main>
    )
}