import {
  HiOutlineBell,
  HiOutlineDocumentText,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

import { recentNotifications } from "../../data/dashboardData";

function RecentNotifications() {

  const icons = {
    warning: <HiOutlineBell className="text-orange-500 text-2xl" />,
    info: <HiOutlineDocumentText className="text-green-500 text-2xl" />,
    primary: <HiOutlineInformationCircle className="text-blue-500 text-2xl" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Notifications
      </h2>

      {recentNotifications.map((item) => (

        <div
          key={item.id}
          className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 rounded-lg px-2 transition"
        >

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              {icons[item.type]}
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500">
                {item.time}
              </p>
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default RecentNotifications;