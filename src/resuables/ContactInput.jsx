export default function ContactInput({
    label,
    disabled,
    error,
    type = "text",
    id,
    placeholder,
    register,
    rules = {},
    pattern,
}) {
    return (
        <div className="md:col-span-2 lg:col-span-1">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                disabled={disabled}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, {
                    ...rules,
                    ...(pattern && { pattern }),
                })}
                className={`mt-2 block w-full rounded-2xl border bg-gray-50 p-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 ${error?.[id]
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-yellow-500 focus:ring-yellow-200"
                    }`}
            />
            {error?.[id] && (
                <p className="mt-2 min-h-[1.25rem] text-sm text-red-600">
                    {error?.[id]?.message || "\u00A0"}
                </p>
            )}
        </div>
    );
}