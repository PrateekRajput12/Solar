import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import SavingsCalculator from "../components/SavingsCalculator";
import FAQAccordion from "../components/FAQAccordion";

const faq = [
    { q: "How long does installation take?", a: "Most residential systems are completed in 2–5 days after approvals." },
    { q: "Do you provide warranty?", a: "Yes, panels and inverters include manufacturer warranty plus service support." },
    { q: "Is financing available?", a: "Yes, EMI and partner financing options are available subject to eligibility." },
];

const testimonials = [
    {
        name: "Amit Sharma",
        city: "Noida",
        text: "Installation was super clean and fast. Bills reduced from the first month. Team was very professional.",
        rating: 5,
    },
    {
        name: "Neha Verma",
        city: "Delhi",
        text: "They guided us from survey to subsidy paperwork. Great support and monitoring app is very helpful.",
        rating: 5,
    },
    {
        name: "Rahul Singh",
        city: "Ghaziabad",
        text: "Quality panels, neat wiring, and after-sales is responsive. Highly recommended for rooftop solar.",
        rating: 5,
    },
];

const gallery = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604917869287-3ae73c8a5d12?q=80&w=1200&auto=format&fit=crop",
];

const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40 dark:text-slate-200">
        {children}
    </span>
);

const StarRow = ({ count = 5 }) => (
    <div className="flex items-center gap-1">
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="text-amber-500">★</span>
        ))}
    </div>
);

export default function Home() {
    return (
        <PageWrapper>
            <Helmet>
                <title>SunPeak Solar | Home</title>
                <meta name="description" content="Premium solar solutions for homes and businesses." />
            </Helmet>

            {/* HERO */}
            <section className="relative overflow-hidden">
                {/* soft background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl dark:bg-green-400/10" />
                    <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-400/10" />
                </div>

                <div className="container-app relative py-14 sm:py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <Badge>Clean Energy</Badge>
                                <Badge>Fast Installation</Badge>
                                <Badge>EMI Available</Badge>
                            </div>

                            <p className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
                                Clean Energy. Smart Savings.
                            </p>

                            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                                Power Your Future with{" "}
                                <span className="text-green-600 dark:text-green-400">Premium Solar</span> Solutions
                            </h1>

                            <p className="mt-4 max-w-xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                                From design to installation and maintenance, SunPeak delivers reliable rooftop solar
                                systems that reduce bills and carbon footprint — with monitoring and support.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link to="/contact" className="btn-primary">
                                    Get Free Site Visit
                                </Link>
                                <Link to="/services" className="btn-secondary">
                                    Calculate Savings
                                </Link>
                                <Link to="/projects" className="btn-secondary">
                                    View Gallery
                                </Link>
                            </div>

                            {/* mini trust row */}
                            <div className="mt-6 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                                <div className="card p-4">
                                    <p className="text-xs" style={{ color: "var(--muted)" }}>Avg. Monthly Savings</p>
                                    <p className="mt-1 text-lg font-semibold">₹2,500+</p>
                                </div>
                                <div className="card p-4">
                                    <p className="text-xs" style={{ color: "var(--muted)" }}>Install Timeline</p>
                                    <p className="mt-1 text-lg font-semibold">2–5 Days</p>
                                </div>
                                <div className="card p-4">
                                    <p className="text-xs" style={{ color: "var(--muted)" }}>Support</p>
                                    <p className="mt-1 text-lg font-semibold">Monitoring App</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="card overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
                                    alt="Solar panels"
                                    className="h-[320px] w-full object-cover sm:h-[420px]"
                                    loading="lazy"
                                />
                            </div>

                            {/* floating card */}
                            <div className="card absolute -bottom-6 left-6 right-6 hidden p-4 sm:block">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs" style={{ color: "var(--muted)" }}>Customer Rating</p>
                                        <div className="mt-1 flex items-center gap-2">
                                            <StarRow count={5} />
                                            <span className="text-sm font-semibold">5.0</span>
                                        </div>
                                    </div>
                                    <div className="h-10 w-px bg-slate-200/60 dark:bg-slate-800/70" />
                                    <div>
                                        <p className="text-xs" style={{ color: "var(--muted)" }}>Free Survey</p>
                                        <p className="mt-1 text-sm font-semibold">Within 24–48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* quick benefits */}
                    <div className="mt-14 grid gap-4 md:grid-cols-3">
                        {[
                            { title: "Premium Components", desc: "Tier-1 panels, trusted inverters, clean wiring, safety-first execution." },
                            { title: "Transparent Pricing", desc: "Clear quotation and bill of materials — no hidden surprises." },
                            { title: "After-Sales Support", desc: "Monitoring, maintenance guidance, and quick issue resolution." },
                        ].map((b) => (
                            <div key={b.title} className="card p-6">
                                <h3 className="text-base font-semibold">{b.title}</h3>
                                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <AnimatedSection className="container-app py-14">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeading
                            title="About SunPeak"
                            subtitle="We make going solar easy — from survey to installation to support."
                        />
                        <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                            SunPeak is focused on high-quality rooftop solar solutions for homes and businesses.
                            Our process is simple: we understand your needs, design the right system, install with
                            clean finishing, and provide monitoring so you can track performance anytime.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {[
                                { k: "100+", v: "Happy Clients" },
                                { k: "10kW+", v: "Installed Capacity" },
                                { k: "24/7", v: "Monitoring" },
                            ].map((s) => (
                                <div key={s.v} className="card p-5">
                                    <p className="text-2xl font-semibold">{s.k}</p>
                                    <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{s.v}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-3">
                            <Link to="/about" className="btn-secondary">Learn More</Link>
                            <Link to="/contact" className="btn-primary">Talk to Expert</Link>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="card overflow-hidden">
                            <img
                                className="h-48 w-full object-cover sm:h-56"
                                loading="lazy"
                                alt="Team installing solar"
                                src="https://images.unsplash.com/photo-1581092919535-7146c30a0dff?q=80&w=1200&auto=format&fit=crop"
                            />
                        </div>
                        <div className="card overflow-hidden">
                            <img
                                className="h-48 w-full object-cover sm:h-56"
                                loading="lazy"
                                alt="Solar rooftop"
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
                            />
                        </div>
                        <div className="card overflow-hidden sm:col-span-2">
                            <img
                                className="h-52 w-full object-cover sm:h-64"
                                loading="lazy"
                                alt="Solar and sunset"
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1400&auto=format&fit=crop"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* HOW IT WORKS */}
            <AnimatedSection className="container-app py-14">
                <SectionHeading title="How It Works" subtitle="Simple 4-step process to go solar." />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { t: "Consultation", d: "We understand your goal, budget, and power usage." },
                        { t: "Site Survey", d: "Rooftop measurement, shadow analysis, and feasibility check." },
                        { t: "Installation", d: "Neat wiring, safe mounting, and quality testing." },
                        { t: "Monitoring & Support", d: "Track generation and get help when needed." },
                    ].map((s, i) => (
                        <div key={s.t} className="card p-6">
                            <p className="text-xs font-medium text-green-600 dark:text-green-400">Step {i + 1}</p>
                            <h3 className="mt-2 text-base font-semibold">{s.t}</h3>
                            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{s.d}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* SAVINGS */}
            <AnimatedSection className="container-app py-14">
                <SectionHeading title="Savings Calculator" subtitle="Estimate how much you can save with solar." />
                <SavingsCalculator />
            </AnimatedSection>

            {/* TESTIMONIALS */}
            <AnimatedSection className="container-app py-14">
                <div className="flex items-end justify-between gap-6">
                    <SectionHeading title="Testimonials" subtitle="Real feedback from customers who switched to solar." />
                    <Link to="/testimonials" className="hidden text-sm font-medium text-green-600 hover:underline dark:text-green-400 sm:block">
                        See all →
                    </Link>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div key={t.name} className="card p-6">
                            <StarRow count={t.rating} />
                            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                                “{t.text}”
                            </p>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold">{t.name}</p>
                                    <p className="text-xs" style={{ color: "var(--muted)" }}>{t.city}</p>
                                </div>
                                <span className="text-xs rounded-full border border-slate-200/60 px-2 py-1 dark:border-slate-800/70">
                                    Verified
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <Link to="/testimonials" className="btn-secondary w-full text-center block">See all testimonials</Link>
                </div>
            </AnimatedSection>

            {/* GALLERY */}
            <AnimatedSection className="container-app py-14">
                <div className="flex items-end justify-between gap-6">
                    <SectionHeading title="Gallery" subtitle="A quick look at our recent installations." />
                    <Link to="/gallery" className="hidden text-sm font-medium text-green-600 hover:underline dark:text-green-400 sm:block">
                        View more →
                    </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((src, idx) => (
                        <div key={src} className="card overflow-hidden">
                            <img
                                src={src}
                                alt={`Installation ${idx + 1}`}
                                loading="lazy"
                                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <Link to="/projects" className="btn-secondary w-full text-center block">Open Gallery</Link>
                </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection className="container-app py-14">
                <SectionHeading title="FAQs" subtitle="Common questions before going solar." />
                <FAQAccordion items={faq} />
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="container-app pb-16">
                <div className="card relative overflow-hidden p-8 sm:p-10">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-400/20 blur-3xl dark:bg-green-400/10" />
                    <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-400/10" />

                    <div className="relative grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
                        <div>
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                Ready to reduce your electricity bill?
                            </h3>
                            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                                Book a free site visit. Get the right system size, expected savings, and a clear quotation.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link to="/contact" className="btn-primary">Book Free Site Visit</Link>
                                <Link to="/services" className="btn-secondary">Explore Services</Link>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {[
                                { t: "Fast Survey", d: "Within 24–48 hours" },
                                { t: "Clean Installation", d: "Neat finishing & safety" },
                                { t: "Monitoring", d: "Track generation anytime" },
                                { t: "Support", d: "Help when you need it" },
                            ].map((x) => (
                                <div key={x.t} className="rounded-2xl border border-slate-200/60 bg-white/50 p-4 dark:border-slate-800/70 dark:bg-slate-950/40">
                                    <p className="text-sm font-semibold">{x.t}</p>
                                    <p className="text-xs" style={{ color: "var(--muted)" }}>{x.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </PageWrapper>
    );
}