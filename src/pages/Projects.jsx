import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import SectionHeading from "../components/SectionHeading";
import projects from "../assets/projects";

const tags = ["All", "Residential", "Commercial", "Rooftop", "Maintenance"];

export default function Projects() {
    const [active, setActive] = useState("All");
    const [selected, setSelected] = useState(null);

    const filtered = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.tag === active)),
        [active]
    );

    return (
        <PageWrapper>
            <Helmet>
                <title>Projects | SunPeak Solar</title>
            </Helmet>

            <section className="container-app py-16">
                <SectionHeading title="Projects Gallery" subtitle="Real installations, measurable impact." />
                <div className="mb-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <button key={tag} onClick={() => setActive(tag)} className={`rounded-full px-4 py-2 text-sm border ${active === tag ? "bg-green-500 text-white border-green-500" : ""}`} style={{ borderColor: active === tag ? "#22c55e" : "var(--border)" }}>
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item) => (
                        <button key={item.id} className="card overflow-hidden text-left" onClick={() => setSelected(item)} aria-label={`Open ${item.title}`}>
                            <img src={item.image} alt={item.title} className="h-52 w-full object-cover" loading="lazy" />
                            <div className="p-4">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm" style={{ color: "var(--muted)" }}>{item.tag}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {selected && (
                <div className="fixed inset-0 z-50 bg-black/70 p-4" onClick={() => setSelected(null)}>
                    <div className="mx-auto mt-10 max-w-3xl card overflow-hidden">
                        <img src={selected.image} alt={selected.title} className="w-full object-cover" />
                    </div>
                </div>
            )}
        </PageWrapper>
    );
}
