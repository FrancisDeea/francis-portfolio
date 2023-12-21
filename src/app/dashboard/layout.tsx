import { NotificationContextProvider } from "@/state/notificationContext"
import Notification from "@/ui/components/Notification"
import SideNav from "@/ui/components/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="flex flex-row p-4 gap-4 h-screen">
            <NotificationContextProvider>
                <Notification />
                <SideNav />
                {children}
            </NotificationContextProvider>
        </main>
    )
}