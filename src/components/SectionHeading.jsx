export default function SectionHeading({ title, subtitle }) {
    return (
        <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{subtitle}</p>}
        </div>
    );
}
