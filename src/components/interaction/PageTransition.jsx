export default function PageTransition({ pageKey, children }) {
  return (
    <div className="page-transition" key={pageKey}>
      {children}
    </div>
  );
}
