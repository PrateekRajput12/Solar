export default function SubsidyCard() {
    return (
        <section
            aria-label="Solar Subsidy Information"
            className="w-full max-w-xl rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-lg shadow-slate-200/40 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-800/70 dark:bg-slate-950/60 dark:shadow-black/30 sm:p-6"
        >
            {/* Header / Banner */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 px-4 py-5 text-center text-white shadow-md sm:px-6">
                <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-300/20 blur-3xl" />

                <p className="text-xs font-semibold tracking-wide text-white/90">
                    PM Surya Ghar Muft Bijli Yojna
                </p>

                <h3 className="mt-2 text-lg font-extrabold leading-snug sm:text-2xl">
                    Residential Rooftop Solar System
                    <br />
                    <span className="text-white/95">पर पाएं ₹78,000 तक की Subsidy</span>
                </h3>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Limited time • T&amp;C Apply
                </div>
            </div>

            {/* Description */}
            <div className="mt-5">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    <span className="font-semibold">PM Surya Ghar Muft Bijli Yojna</span>{" "}
                    का लक्ष्य है <span className="font-semibold">1 करोड़</span>{" "}
                    <span className="font-semibold">घरों तक</span> Solar Power{" "}
                    <span className="font-semibold">पहुँचाना</span>, जो महीने के{" "}
                    <span className="font-semibold">300 units</span>{" "}
                    तक <span className="font-semibold">Free बिजली</span> का लाभ देगा।
                </p>
            </div>

            {/* Table */}
            <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-950 overflow-hidden">

                {/* top label */}
                <div className="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 dark:border-slate-800/70">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Subsidy Slab (UP)
                    </p>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                        Updated as per scheme*
                    </span>
                </div>

                {/* responsive table */}
                <table className="w-full text-xs sm:text-sm">
                    <thead>
                        <tr className="bg-red-600 text-white">
                            <th className="px-2 py-3 text-left font-semibold">Size</th>
                            <th className="px-2 py-3 text-left font-semibold">Central</th>
                            <th className="px-2 py-3 text-left font-semibold">State</th>
                            <th className="px-2 py-3 text-left font-semibold">Total</th>
                        </tr>
                    </thead>

                    <tbody className="text-slate-800 dark:text-slate-200">
                        <tr className="border-t border-slate-200/70 dark:border-slate-800/70">
                            <td className="px-2 py-3 font-medium">1kW</td>
                            <td className="px-2 py-3">₹30,000</td>
                            <td className="px-2 py-3">₹15,000</td>
                            <td className="px-2 py-3 font-semibold">₹45,000</td>
                        </tr>

                        <tr className="border-t border-slate-200/70 bg-slate-50/70 dark:border-slate-800/70 dark:bg-slate-900/30">
                            <td className="px-2 py-3 font-medium">2kW</td>
                            <td className="px-2 py-3">₹60,000</td>
                            <td className="px-2 py-3">₹30,000</td>
                            <td className="px-2 py-3 font-semibold">₹90,000</td>
                        </tr>

                        <tr className="border-t border-slate-200/70 dark:border-slate-800/70">
                            <td className="px-2 py-3 font-medium">3kW+</td>
                            <td className="px-2 py-3">₹78,000</td>
                            <td className="px-2 py-3">₹30,000</td>
                            <td className="px-2 py-3 font-semibold">₹1,08,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer note */}
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                *Subsidy values may change as per government updates. Final eligibility depends on site survey & scheme rules.
            </p>
        </section>
    );
}