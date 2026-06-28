import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

import { profileData } from "../../data/profileData";

function ContactInfo() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Contact Information
      </h2>

      <ContactRow
        icon={<HiOutlineEnvelope />}
        label="Email"
        value={profileData.email}
      />

      <ContactRow
        icon={<HiOutlinePhone />}
        label="Phone"
        value={profileData.phone}
      />

      <ContactRow
        icon={<HiOutlineMapPin />}
        label="Address"
        value={profileData.address}
      />

    </div>
  );
}

function ContactRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">

      <div className="text-blue-600 text-2xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-medium">
          {value}
        </p>
      </div>

    </div>
  );
}

export default ContactInfo;