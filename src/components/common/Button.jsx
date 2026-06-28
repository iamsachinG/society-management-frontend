function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-600 hover:bg-slate-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    warning:
      "bg-orange-500 hover:bg-orange-600 text-white",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        px-5
        py-2.5
        rounded-lg
        font-medium
        transition-all
        duration-200
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;