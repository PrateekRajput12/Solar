import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout({ children, theme, toggleTheme }) {
    return (
        <div className="min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>{children}</main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
