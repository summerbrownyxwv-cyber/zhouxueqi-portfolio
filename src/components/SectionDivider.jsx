export default function SectionDivider({ children, id }) {
  return (
    <div className="section-divider" id={id}>
      <span aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
