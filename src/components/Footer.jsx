import { siteMeta } from "../data/portfolioData.js";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <p>{siteMeta.copyright}</p>
      <nav aria-label="Footer navigation">
        {siteMeta.footerNav.map((item) => (
          <a key={item.href} href={item.href} onClick={(event) => onNavigate(event, item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
