import ProjectShowcase from "../components/ProjectShowcase.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import { workContent, workProjects } from "../data/portfolioData.js";

export default function WorkPage({ onNavigate }) {
  return (
    <main className="page-frame inner-page work-page">
      <SectionDivider>{workContent.sectionTitle}</SectionDivider>
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
