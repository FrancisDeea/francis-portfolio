import CreateProjectForm from "@/ui/components/dashboard/CreateProjectForm"
import Editor from "@/ui/components/dashboard/Editor"

export default function Create() {
    return (
        <section className="section w-full min-h-[calc(100vh-6rem)] ct-flex-col">
            <h1 className="">Create a new project</h1>
            <CreateProjectForm />
        </section>
    )
}