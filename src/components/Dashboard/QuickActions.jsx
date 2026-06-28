import { quickActions } from "../../data/dashboardData";

function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {quickActions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.id}
              className="border border-slate-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >

              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${action.color}`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-700">
                {action.title}
              </h3>

            </button>
          );

        })}

      </div>

    </div>
  );
}

export default QuickActions;