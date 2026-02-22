import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import SectionHeading from "../components/SectionHeading";
import Toast from "../components/Toast";
import siteConfig from "../data/siteConfig";

const initial = {
    name: "",
    phone: "",
    city: "",
    serviceType: "",
    monthlyBill: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [toast, setToast] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.phone.trim()) e.phone = "Phone is required";
        if (!form.city.trim()) e.city = "City is required";
        if (!form.serviceType) e.serviceType = "Select a service";
        if (!form.monthlyBill) e.monthlyBill = "Select bill range";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = (ev) => {
        ev.preventDefault();
        if (!validate()) return;

        const text = `*New Solar Enquiry*%0A
Name: ${encodeURIComponent(form.name)}%0A
Phone: ${encodeURIComponent(form.phone)}%0A
City: ${encodeURIComponent(form.city)}%0A
Service: ${encodeURIComponent(form.serviceType)}%0A
Monthly Bill: ${encodeURIComponent(form.monthlyBill)}%0A
Message: ${encodeURIComponent(form.message || "N/A")}`;

        setToast("Opening WhatsApp...");
        setTimeout(() => setToast(""), 2000);

        window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
        setForm(initial);
    };

    return (
        <PageWrapper>
            <Helmet>
                <title>Contact | SunPeak Solar</title>
            </Helmet>
            <Toast message={toast} />

            <section className="container-app py-16">
                <SectionHeading title="Contact Us" subtitle="Get free consultation and quote." />
                <div className="grid gap-6 lg:grid-cols-2">
                    <form className="card p-6 space-y-4" onSubmit={submit}>
                        <input name="name" placeholder="Name*" value={form.name} onChange={handleChange} aria-label="Name" />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

                        <input name="phone" placeholder="Phone*" value={form.phone} onChange={handleChange} aria-label="Phone" />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}

                        <input name="city" placeholder="City*" value={form.city} onChange={handleChange} aria-label="City" />
                        {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}

                        <select name="serviceType" value={form.serviceType} onChange={handleChange} aria-label="Service Type">
                            <option value="">Service Type*</option>
                            <option>Residential Solar</option>
                            <option>Commercial Solar</option>
                            <option>Rooftop Solar</option>
                            <option>Solar Maintenance / AMC</option>
                            <option>Solar Water Heater</option>
                        </select>
                        {errors.serviceType && <p className="text-xs text-red-500">{errors.serviceType}</p>}

                        <select name="monthlyBill" value={form.monthlyBill} onChange={handleChange} aria-label="Monthly electricity bill">
                            <option value="">Monthly Electricity Bill*</option>
                            <option>Below ₹2000</option>
                            <option>₹2000 - ₹5000</option>
                            <option>₹5000 - ₹10000</option>
                            <option>Above ₹10000</option>
                        </select>
                        {errors.monthlyBill && <p className="text-xs text-red-500">{errors.monthlyBill}</p>}

                        <textarea name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} aria-label="Message" />
                        <button type="submit" className="btn-primary w-full">Request Quote</button>
                    </form>

                    <div className="space-y-4">
                        <div className="card p-5">
                            <h3 className="font-semibold">Find Us</h3>
                            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{siteConfig.address}</p>
                            <p className="mt-2 text-sm">Hours: Mon-Sat, 9:30 AM - 6:30 PM</p>
                            <p className="text-sm">Phone: {siteConfig.phoneNumber}</p>
                            <p className="text-sm">Email: {siteConfig.email}</p>
                            <a href={siteConfig.googleMapDirectionsUrl} target="_blank" rel="noreferrer" className="btn-secondary mt-4">
                                Get Directions
                            </a>
                        </div>
                        <div className="card overflow-hidden">
                            {/* <iframe
                                src={siteConfig.googleMapEmbedUrl}
                                title="Google Map"
                                width="100%"
                                height="320"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            /> */}
                            <iframe className="border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.391284626702!2d77.6586994754596!3d27.488204076308847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371bb1362c5b3%3A0x3eb0c4d6e5b25a0b!2sMathura%20Best%20properties%20sales%20%26%20purchase%20pratap%20farm%20dealer!5e0!3m2!1sen!2sin!4v1771737358383!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
