import { useState } from "react";

export default function FAQAccordion({ items }) {
    const [open, setOpen] = useState(0);

    return (
        <div className="space-y-3">
            {items.map((item, idx) => {
                const isOpen = open === idx;
                return (
                    <div key={item.q} className="card p-4">
                        <button
                            className="flex w-full items-center justify-between text-left font-medium"
                            onClick={() => setOpen(isOpen ? -1 : idx)}
                            aria-expanded={isOpen}
                        >
                            {item.q}
                            <span>{isOpen ? "-" : "+"}</span>
                        </button>
                        {isOpen && <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>{item.a}</p>}
                    </div>
                );
            })}
        </div>
    );
}
