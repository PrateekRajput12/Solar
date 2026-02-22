import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import SectionHeading from "../components/SectionHeading";

const reviews = [
    { name: "Anita Sharma", text: "Professional team and clean execution. Savings are visible from month one." },
    { name: "Vikram Rao", text: "Commercial setup completed on time. Excellent after-sales support." },
    { name: "Neha Kapoor", text: "Smooth process from survey to net-metering approvals." },
];

export default function Testimonials() {
    return (
        <PageWrapper>
            <Helmet>
                <title>Testimonials | SunPeak Solar</title>
            </Helmet>
            <section className="container-app py-16">
                <SectionHeading title="What Clients Say" subtitle="4.9/5 average rating from verified installations." />
                <div className="grid gap-4 md:grid-cols-3">
                    {reviews.map((r, idx) => (
                        <motion.div
                            key={r.name}
                            className="card p-6"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-yellow-400">★★★★★</p>
                            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>{r.text}</p>
                            <p className="mt-4 font-semibold">{r.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
}
