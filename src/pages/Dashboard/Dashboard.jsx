import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import StatCard from "../../components/Dashboard/StatCard";
import QuickActions from "../../components/Dashboard/QuickActions";
import RecentVisitors from "../../components/Dashboard/RecentVisitors";
import RecentNotifications from "../../components/Dashboard/RecentNotifications";

import { dashboardStats } from "../../data/dashboardData";

function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {dashboardStats.map((card) => (
          <StatCard
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            type={card.type}
            trend={card.trend}
            trendText={card.trendText}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RecentVisitors />
        <RecentNotifications />
      </div>

      <QuickActions />
    </div>
  );
}

export default Dashboard;