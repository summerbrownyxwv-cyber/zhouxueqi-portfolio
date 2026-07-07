import { useEffect, useMemo, useState } from "react";
import PageTransition from "./components/interaction/PageTransition.jsx";
import RevealOnScroll from "./components/interaction/RevealOnScroll.jsx";
import Shell from "./components/Shell.jsx";
import EmailPage from "./pages/Email.jsx";
import GraphicPromotionPage from "./pages/GraphicPromotion.jsx";
import HomePage from "./pages/Home.jsx";
import LibraryPage from "./pages/Library.jsx";
import ProjectDetailPage from "./pages/ProjectDetail.jsx";
import ResumePage from "./pages/Resume.jsx";
import WorkPage from "./pages/Work.jsx";
import { projectDetailItems } from "./data/portfolioData.js";

const routes = {
  "/": HomePage,
  "/work": WorkPage,
  "/library": LibraryPage,
  "/03-01": GraphicPromotionPage,
  "/resume": ResumePage,
  "/email": EmailPage,
};

function normalizePath(pathname) {
  const pathOnly = pathname.split("#")[0] || "/";
  if (pathOnly === "/index.html") return "/";
  if (routes[pathOnly]) return pathOnly;
  if (projectDetailItems.some((project) => project.route === pathOnly)) return pathOnly;
  return "/";
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const activeProject = useMemo(
    () => projectDetailItems.find((project) => project.route === path),
    [path],
  );
  const Page = useMemo(() => {
    if (activeProject) return ProjectDetailPage;
    return routes[path] ?? HomePage;
  }, [activeProject, path]);

  function navigate(event, href) {
    if (
      !href ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("http")
    ) {
      return;
    }

    event.preventDefault();
    const [rawPath, hash] = href.split("#");
    const nextPath = normalizePath(rawPath || window.location.pathname);
    window.history.pushState({}, "", href);
    setPath(nextPath);

    window.setTimeout(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    }, 0);
  }

  return (
    <>
      <Shell currentPath={path} onNavigate={navigate}>
        <PageTransition pageKey={path}>
          <Page currentPath={path} onNavigate={navigate} project={activeProject} />
        </PageTransition>
      </Shell>
      <RevealOnScroll watchKey={path} />
    </>
  );
}
