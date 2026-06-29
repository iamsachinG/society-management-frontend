import NotificationsHeader from "../../components/notifications/NotificationsHeader";
import NotificationsList from "../../components/notifications/NotificationsList";

import { notifications } from "../../data/notificationData";

function Notifications() {
  return (
    <div className="space-y-6 px-2">
      <NotificationsHeader />

      <NotificationsList notifications={notifications} />
    </div>
  );
}

export default Notifications;