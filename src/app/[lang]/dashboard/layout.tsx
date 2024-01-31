import { Lang } from "@/lib/definitions";
import { NotificationContextProvider } from "@/state/notificationContext";
import Notification from "@/ui/components/Notification";
import SideNav from "@/ui/components/dashboard/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Francis Bernal",
    default: "Dashboard",
  },
  description: "Dashboard de Francis Bernal"
};

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <main className="max-lg:p-4 pt-4 lg:h-[calc(100vh-80px)] ct-flex-col justify-start lg:ct-flex-row lg:items-stretch">
      <NotificationContextProvider>
        <Notification />
        <SideNav lang={lang} />
        {children}
      </NotificationContextProvider>
    </main>
  );
}
