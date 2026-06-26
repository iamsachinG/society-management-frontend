import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineCreditCard,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineExclamationCircle,
    HiOutlineBell,
    HiOutlineBuildingOffice2,
    HiOutlineCog6Tooth,
    HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";

import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold text-blue-400">
                    SocietyHub
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Resident Portal
                </p>
            </div>

            <nav className="mt-6 px-4 space-y-2 flex-1">

                <SidebarItem
                    to="/dashboard"
                    icon={<HiOutlineHome />}
                    text="Dashboard"
                />

                <SidebarItem
                    to="/profile"
                    icon={<HiOutlineUser />}
                    text="My Profile"
                />

                <SidebarItem
                    to="/maintenance"
                    icon={<HiOutlineCreditCard />}
                    text="Maintenance"
                />

                <SidebarItem
                    to="/visitors"
                    icon={<HiOutlineUsers />}
                    text="Visitors"
                />

                <SidebarItem
                    to="/documents"
                    icon={<HiOutlineDocumentText />}
                    text="Documents"
                />

                <SidebarItem
                    to="/complaints"
                    icon={<HiOutlineExclamationCircle />}
                    text="Complaints"
                />

                <SidebarItem
                    to="/notifications"
                    icon={<HiOutlineBell />}
                    text="Notifications"
                />

                <SidebarItem
                    to="/amenities"
                    icon={<HiOutlineBuildingOffice2 />}
                    text="Amenities"
                />

                <SidebarItem
                    to="/settings"
                    icon={<HiOutlineCog6Tooth />}
                    text="Settings"
                />

            </nav>

            <div className="p-4 border-t border-slate-700">
                <button className="flex items-center gap-3 w-full rounded-lg px-4 py-3 text-white hover:bg-red-500 transition duration-200">
                    <HiOutlineArrowLeftOnRectangle className="text-xl" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}

function SidebarItem({ to, icon, text }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 w-full rounded-lg px-4 py-3 transition-all duration-200 ${
                    isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
            }
        >
            <span className="text-xl">
                {icon}
            </span>

            <span className="font-medium">
                {text}
            </span>
        </NavLink>
    );
}

export default Sidebar;