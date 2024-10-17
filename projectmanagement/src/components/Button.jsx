export default function Button({children, ...props}) {
    return (
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            {...props}
            >
            {children}
        </button>

    );
    }