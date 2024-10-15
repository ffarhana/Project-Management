export default function ProjectsSidebar() {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2>Your Projects</h2>
            <div className="mb-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                    + Add Project
                </button>
            </div>
            <nav>
                <ul className="space-y-4">
                    {/* Add project items here */}
                </ul>
            </nav>
        </aside>
    );
}
