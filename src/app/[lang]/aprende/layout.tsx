import { Lang } from "@/lib/definitions";
import Sidebar from "@/ui/components/aprende/Sidebar";

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <div className="mt-4 flex flex-row min-h-[calc(100vh-96px)] gap-4 w-[calc(100%-2rem)] max-w-[1200px] m-auto">
      <Sidebar lang={lang} />
      {children}
    </div>
  );
}
