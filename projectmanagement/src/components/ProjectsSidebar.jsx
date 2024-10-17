import Button from "./Button.jsx";
export default function ProjectsSidebar({onStartAddProject}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2>Your Projects</h2>
            <div className="mb-6">
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <nav>
                <ul className="space-y-4">
                    {/* Add project items here */}
                </ul>
            </nav>
        </aside>
    );
}
