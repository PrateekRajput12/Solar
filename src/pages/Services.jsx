import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import SectionHeading from "../components/SectionHeading";
import AnimatedSection from "../components/AnimatedSection";

const services = [
    "Residential Solar",
    "Commercial Solar",
    "Rooftop Solar",
    "Solar Maintenance / AMC",
    "Solar Water Heater",
];

export default function Services() {
    return (
        <PageWrapper>
            <Helmet>
                <title>Services | SunPeak Solar</title>
            </Helmet>
            <section className="container-app py-16">
                <SectionHeading title="Our Services" subtitle="Tailored for homes, businesses, and institutions." />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <AnimatedSection key={s} className="card p-6 hover:-translate-y-1 transition">
                            <h3 className="font-semibold">{s}</h3>
                            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                                End-to-end execution from feasibility to after-sales support.
                            </p>
                        </AnimatedSection>
                    ))}
                </div>
                <div className="mt-8">
                    <Link className="btn-primary" to="/contact">Request Quote</Link>
                </div>
            </section>
        </PageWrapper>
    );
}
