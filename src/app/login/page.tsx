import LoginForm from "@/ui/components/LoginForm";
import '../globals.css';

export default function Page() {
  return (
    <main className="p-4 ct-flex-col items-center w-full min-h-dvh">
        <h1>Dashboard</h1>
        <LoginForm />
    </main>
  );
}
