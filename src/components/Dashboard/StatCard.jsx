const styles = {
  primary: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-500",
  },
  success: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-500",
  },
  warning: {
    bg: "bg-orange-100",
    text: "text-orange-500",
    border: "border-orange-500",
  },
  danger: {
    bg: "bg-red-100",
    text: "text-red-500",
    border: "border-red-500",
  },
};

function StatCard({
  title,
  value,
  icon: Icon,
  type,
  trend,
  trendText,
}) {
  const current = styles[type];

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border-l-4 ${current.border} border-t border-r border-b border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className={`mt-3 text-sm font-medium ${current.text}`}>
            {trend}

            <span className="text-slate-500 ml-2 font-normal">
              {trendText}
            </span>
          </p>
        </div>

        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${current.bg}`}
        >
          <Icon className={`text-3xl ${current.text}`} />
        </div>

      </div>
    </div>
  );
}

export default StatCard;