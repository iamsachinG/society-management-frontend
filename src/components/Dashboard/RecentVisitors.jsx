import {
  HiOutlineUserCircle,
} from "react-icons/hi2";

import { recentVisitors } from "../../data/dashboardData";

function RecentVisitors() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-5">
        Recent Visitors
      </h2>

      {recentVisitors.map((visitor) => (
        <div
          key={visitor.id}
          className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 rounded-lg px-2 transition"
        >
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineUserCircle className="text-3xl text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                {visitor.name}
              </h3>

              <p className="text-sm text-slate-500">
                Flat {visitor.flat}
              </p>
            </div>

          </div>

          <div className="text-right">

            <p className="text-sm text-slate-500">
              {visitor.time}
            </p>

            <StatusBadge status={visitor.status} />

          </div>

        </div>
      ))}
    </div>
  );
}

export default RecentVisitors;

function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-green-100 text-green-700",
    Waiting: "bg-yellow-100 text-yellow-700",
    Denied: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}