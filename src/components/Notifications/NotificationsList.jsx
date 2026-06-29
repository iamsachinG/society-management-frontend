import Card from "../Common/Card";
import { HiOutlineBellAlert } from "react-icons/hi2";

function NotificationsList({ notifications }) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Recent Notifications
        </h2>

        <span className="text-sm text-slate-500">
          Total: {notifications.length}
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <HiOutlineBellAlert className="text-blue-600 text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.date}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              New
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default NotificationsList;