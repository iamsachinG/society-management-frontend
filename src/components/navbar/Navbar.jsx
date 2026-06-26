import {
  HiOutlineBars3,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="text-slate-600 hover:text-blue-600 transition">
          <HiOutlineBars3 className="text-2xl" />
        </button>

        <h1 className="text-xl font-semibold text-slate-800">
          Resident Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">

          <HiOutlineMagnifyingGlass className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm"
          />

        </div>

        {/* Notification */}
        <button className="relative text-slate-600 hover:text-blue-600 transition">

          <HiOutlineBell className="text-2xl" />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            S
          </div>

          <div className="hidden md:block">
            <p className="font-medium text-slate-800">
              Sachin Gupta
            </p>

            <p className="text-xs text-slate-500">
              Resident
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;