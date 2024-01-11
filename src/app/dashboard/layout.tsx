import { NotificationContextProvider } from "@/state/notificationContext";
import Notification from "@/ui/components/Notification";
import SideNav from "@/ui/components/dashboard/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-lg:p-4 pt-4 lg:h-[calc(100vh-80px)] ct-flex-col justify-start lg:ct-flex-row lg:items-stretch">
      <NotificationContextProvider>
        <Notification />
        <SideNav />
        {children}
      </NotificationContextProvider>
    </main>
  );
}
