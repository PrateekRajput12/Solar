import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";

export default function About() {
    return (
        <PageWrapper>
            <Helmet>
                <title>About | SunPeak Solar</title>
            </Helmet>
            <section className="container-app py-16">
                <SectionHeading title="Our Story" subtitle="Driven by sustainability and engineering excellence." />
                <div className="card p-6">
                    <p style={{ color: "var(--muted)" }}>
                        SunPeak Solar started with one mission: make premium solar adoption simple, transparent, and value-driven.
                    </p>
                </div>
            </section>
            <AnimatedSection className="container-app pb-16 grid gap-4 md:grid-cols-3">
                {["Mission", "Certifications", "Why Choose Us"].map((item) => (
                    <div key={item} className="card p-6">
                        <h3 className="font-semibold">{item}</h3>
                        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                            High-quality components, expert technicians, and long-term service support.
                        </p>
                    </div>
                ))}
            </AnimatedSection>
        </PageWrapper>
    );
}
