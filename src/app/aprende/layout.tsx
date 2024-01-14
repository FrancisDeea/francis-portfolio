import Sidebar from "@/ui/components/aprende/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex flex-row min-h-[calc(100vh-96px)] gap-4 w-[calc(100%-2rem)] max-w-[1200px] m-auto">
      <Sidebar />
      {children}
    </div>
  );
}
