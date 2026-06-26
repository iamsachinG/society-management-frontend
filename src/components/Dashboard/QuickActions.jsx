function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="flex gap-4 mt-4">

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Pay Maintenance
        </button>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Raise Complaint
        </button>

      </div>

    </div>
  );
}

export default QuickActions;