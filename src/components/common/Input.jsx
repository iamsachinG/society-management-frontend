function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  required = false,
  className = "",
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          w-full
          rounded-lg
          border
          border-slate-300
          px-4
          py-2.5
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          disabled:bg-slate-100
          disabled:cursor-not-allowed
          ${className}
        `}
      />
    </div>
  );
}

export default Input;