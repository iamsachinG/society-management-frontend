import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileCard from "../../components/profile/ProfileCard";
import ContactInfo from "../../components/profile/ContactInfo";
import ActionButtons from "../../components/profile/ActionButtons";

function Profile() {
  return (
    <div className="space-y-6">

      <ProfileHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          <ContactInfo />

          <ActionButtons />
        </div>

      </div>

    </div>
  );
}

export default Profile;