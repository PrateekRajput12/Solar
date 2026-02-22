import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
    return (
        <PageWrapper>
            <div className="container-app py-24 text-center">
                <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
                <Link to="/" className="btn-primary mt-6">Back to Home</Link>
            </div>
        </PageWrapper>
    );
}
