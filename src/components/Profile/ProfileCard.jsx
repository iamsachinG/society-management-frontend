import { HiOutlineUserCircle } from "react-icons/hi2";
import { profileData } from "../../data/profileData";

function ProfileCard() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

      <div className="flex flex-col items-center">

        <HiOutlineUserCircle className="text-8xl text-blue-600" />

        <h2 className="mt-4 text-2xl font-bold">
          {profileData.name}
        </h2>

        <p className="text-slate-500">
          {profileData.role}
        </p>

      </div>

      <div className="mt-8 space-y-3">

        <InfoRow label="Flat" value={profileData.flat} />

        <InfoRow label="Wing" value={profileData.wing} />

      </div>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2">
      <span className="font-medium text-slate-600">
        {label}
      </span>

      <span className="text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default ProfileCard;