import ProjectShowcase from "../components/ProjectShowcase.jsx";
import {
  graphicPromotionProjects,
} from "../data/portfolioData.js";

export default function GraphicPromotionPage({ onNavigate }) {
  return (
    <main className="page-frame inner-page graphic-promotion-page">
      <div className="project-list project-list--graphic">
        {graphicPromotionProjects.map((project) => (
          <ProjectShowcase key={project.id} project={project} onNavigate={onNavigate} />
        ))}
      </div>
    </main>
  );
}
