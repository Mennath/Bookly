export default function SectionTitle({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`mb-2 text-[10px] font-bold uppercase tracking-[.25em] ${light ? "text-pink-300" : "text-rose"}`}>{eyebrow}</p>}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-3 text-sm leading-6 ${light ? "text-white/55" : "text-muted"}`}>{description}</p>}
    </div>
  );
}
