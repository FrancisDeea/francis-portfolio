import { fetchAllProjects } from "@/lib/dbdata";
import DashProjectCard from "@/ui/components/dashboard/DashProjectCard";

export default async function Projects() {
  const projects = await fetchAllProjects();

  return (
    <div className="ct-flex-col">
      {projects.map((project) => {
        return <DashProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
