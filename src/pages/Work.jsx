import ProjectShowcase from "../components/ProjectShowcase.jsx";
import { workProjects } from "../data/portfolioData.js";

export default function WorkPage({ onNavigate }) {
  return (
    <main className="page-frame inner-page work-page">
      <div className="project-list project-list--work">
        {workProjects.map((project) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            variant="work"
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </main>
  );
}
