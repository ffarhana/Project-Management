export default function Input({ label, textarea, ...props }) {
    const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`; // Generate a unique ID for the input/textarea
    const classes = "w-full p-2 border rounded"
    
    
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label>
            {textarea ? (
                <textarea id={inputId} className={classes} {...props} />
            ) : (
                <input id={inputId} className={classes} {...props} />
            )}
        </p>
    );
}
