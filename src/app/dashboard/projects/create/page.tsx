import CreateProjectFormTest from "@/ui/components/dashboard/CreateProjectFormTest"
import Editor from "@/ui/components/dashboard/Editor"

export default function Create() {
    return (
        <section className="bg-slate-300 w-full p-4 rounded-2xl flex flex-col">
            <h1 className="text-xl text-black font-bold">Create a new project</h1>
            {/* <CreateProjectFormTest /> */}
            <Editor />
        </section>
    )
}