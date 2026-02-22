import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

export default function Footer() {
    return (
        <footer className="mt-16 border-t py-10" style={{ borderColor: "var(--border)" }}>
            <div className="container-app grid gap-8 md:grid-cols-3">
                <div>
                    <h3 className="font-semibold">{siteConfig.businessName}</h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                        Smart solar solutions for homes and businesses.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold">Quick Links</h4>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Follow Us</h4>
                    <div className="mt-3 flex gap-3">
                        <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                        <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noreferrer"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
