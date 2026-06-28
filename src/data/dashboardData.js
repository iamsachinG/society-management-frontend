import {
  HiOutlineCreditCard,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineExclamationCircle,
  HiOutlineBuildingOffice2,
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

export const recentVisitors = [
  {
    id: 1,
    name: "Rahul Sharma",
    flat: "B-302",
    time: "10:30 AM",
    status: "Approved",
  },
  {
    id: 2,
    name: "Priya Patel",
    flat: "A-101",
    time: "11:45 AM",
    status: "Waiting",
  },
  {
    id: 3,
    name: "Amit Verma",
    flat: "C-204",
    time: "Yesterday",
    status: "Denied",
  },
];

export const recentNotifications = [
  {
    id: 1,
    title: "Maintenance payment due tomorrow",
    time: "2 min ago",
    type: "warning",
  },
  {
    id: 2,
    title: "Society meeting on Sunday",
    time: "1 hour ago",
    type: "info",
  },
  {
    id: 3,
    title: "Water supply interruption",
    time: "Yesterday",
    type: "primary",
  },
];

export const quickActions = [
  {
    id: 1,
    title: "Pay Maintenance",
    icon: HiOutlineCreditCard,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Add Visitor",
    icon: HiOutlineUsers,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "View Documents",
    icon: HiOutlineDocumentText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Book Amenities",
    icon: HiOutlineBuildingOffice2,
    color: "bg-purple-100 text-purple-600",
  },
];