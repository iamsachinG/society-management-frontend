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

                <SidebarItem icon={<HiOutlineHome />} text="Dashboard" />
                <SidebarItem icon={<HiOutlineUser />} text="My Profile" />
                <SidebarItem icon={<HiOutlineCreditCard />} text="Maintenance" />
                <SidebarItem icon={<HiOutlineUsers />} text="Visitors" />
                <SidebarItem icon={<HiOutlineDocumentText />} text="Documents" />
                <SidebarItem icon={<HiOutlineExclamationCircle />} text="Complaints" />
                <SidebarItem icon={<HiOutlineBell />} text="Notifications" />
                <SidebarItem icon={<HiOutlineBuildingOffice2 />} text="Amenities" />
                <SidebarItem icon={<HiOutlineCog6Tooth />} text="Settings" />

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

function SidebarItem({ icon, text }) {
    return (
        <button className="flex items-center gap-3 w-full rounded-lg px-4 py-3 text-white hover:bg-blue-600 transition duration-200">
            <span className="text-xl">
                {icon}
            </span>

            <span>
                {text}
            </span>
        </button>
    );
}

export default Sidebar;