export default function Toast({ message }) {
    if (!message) return null;
    return (
        <div className="fixed left-1/2 top-20 z-[60] -translate-x-1/2 rounded-xl bg-green-600 px-4 py-2 text-sm text-white shadow-lg">
            {message}
        </div>
    );
}
