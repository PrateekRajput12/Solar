import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="rounded-xl border p-2 transition hover:scale-105"
            style={{ borderColor: "var(--border)" }}
        >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
    );
}
