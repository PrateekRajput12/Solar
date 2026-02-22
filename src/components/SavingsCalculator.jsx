import { useMemo, useState } from "react";

export default function SavingsCalculator() {
    const [bill, setBill] = useState("3000");

    const estimate = useMemo(() => {
        const b = Number(bill);
        return {
            monthly: Math.round(b * 0.7),
            yearly: Math.round(b * 0.7 * 12),
        };
    }, [bill]);

    return (
        <div className="card p-6">
            <h3 className="text-lg font-semibold">Savings Calculator</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                Select your monthly bill to estimate savings.
            </p>
            <div className="mt-4">
                <input type="range" min="1000" max="20000" step="500" value={bill} onChange={(e) => setBill(e.target.value)} aria-label="Monthly electricity bill" />
                <p className="mt-3 text-sm">Current bill: ₹{bill}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3" style={{ background: "var(--primary-soft)" }}>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>Estimated Monthly Savings</p>
                    <p className="text-lg font-semibold">₹{estimate.monthly}</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: "var(--primary-soft)" }}>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>Estimated Yearly Savings</p>
                    <p className="text-lg font-semibold">₹{estimate.yearly}</p>
                </div>
            </div>
        </div>
    );
}
