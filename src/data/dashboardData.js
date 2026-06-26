import {
  HiOutlineCreditCard,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

export const dashboardStats = [
  {
    id: 1,
    title: "Outstanding Maintenance",
    value: "₹2,500",
    icon: HiOutlineCreditCard,
    type: "warning",
    trend: "+8%",
    trendText: "Pending this month",
  },
  {
    id: 2,
    title: "Visitors Today",
    value: "3",
    icon: HiOutlineUsers,
    type: "primary",
    trend: "+2",
    trendText: "Since yesterday",
  },
  {
    id: 3,
    title: "Documents",
    value: "12",
    icon: HiOutlineDocumentText,
    type: "success",
    trend: "+4",
    trendText: "New uploads",
  },
  {
    id: 4,
    title: "Open Complaints",
    value: "1",
    icon: HiOutlineExclamationCircle,
    type: "danger",
    trend: "-2",
    trendText: "Resolved today",
  },
];