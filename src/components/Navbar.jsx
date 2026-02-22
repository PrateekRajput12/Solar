import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import siteConfig from "../data/siteConfig";
import ThemeToggle from "./ThemeToggle";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 84%, transparent)" }}>
            <div className="container-app flex h-16 items-center justify-between">
                <NavLink to="/" className="font-semibold tracking-tight text-lg">
                    {siteConfig.businessName}
                </NavLink>

                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${isActive ? "text-green-500" : "hover:text-green-500"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 border" style={{ borderColor: "var(--border)" }}>
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="container-app border-t py-3 md:hidden" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-col gap-2">
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-green-500/10">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
