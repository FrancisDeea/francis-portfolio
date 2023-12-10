export default function CreateProjectForm() {
    return (
        <form id="projectForm" className="">
            <label htmlFor="title_project">
                Enter project title:
            </label>
            <input id="title_project" type="text" maxLength={255} required />

            <label htmlFor="image_project">
                Enter imagen&apos;project url:
            </label>
            <input id="image_project" type="text" maxLength={255} />

            <label htmlFor="technologies_project">
                Enter technologies:
            </label>
            <input id="technologies_project" type="text" maxLength={200} required />

            <label htmlFor="description_project">
                Enter description:
            </label>
            <textarea id="description_project" required />
            
            <input type="submit" value="Create" />
        </form>
    )
}