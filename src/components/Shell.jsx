import Footer from "./Footer.jsx";
import { siteMeta } from "../data/portfolioData.js";

function Header({ currentPath, onNavigate }) {
  const isActive = (item) => {
    const pathOnly = item.href.split("#")[0] || "/";
    return currentPath === pathOnly;
  };

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="site-mark" href="/" onClick={(event) => onNavigate(event, "/")}>
        {siteMeta.name}
      </a>
      <nav className="global-nav">
        {siteMeta.globalNav.map((item) => (
          <a
            className="nav-item"
            key={item.href}
            href={item.href}
            aria-current={isActive(item) ? "page" : undefined}
            onClick={(event) => onNavigate(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default function Shell({ children, currentPath, onNavigate }) {
  const isHome = currentPath === "/";
  const isEmail = currentPath === "/email";

  return (
    <div className={`app-shell ${isHome ? "is-home" : ""}`}>
      {!isHome && <Header currentPath={currentPath} onNavigate={onNavigate} />}
      {children}
      {!isEmail && <Footer onNavigate={onNavigate} />}
    </div>
  );
}
