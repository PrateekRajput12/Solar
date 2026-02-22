import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

export default function FloatingActions() {
    return (
        <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
            <a
                aria-label="Chat on WhatsApp"
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-105"
            >
                <FaWhatsapp />
            </a>
            <a
                aria-label="Call now"
                href={`tel:${siteConfig.phoneNumber}`}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:scale-105"
            >
                <FaPhoneAlt />
            </a>
        </div>
    );
}
