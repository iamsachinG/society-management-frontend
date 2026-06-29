import Card from "../../components/Common/Card";
import Button from "../../components/Common/Button";

function Settings() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account preferences and security.
        </p>
      </div>

      <Card>

        <h2 className="text-xl font-semibold mb-6">
          Account
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <h3 className="font-medium">
                Edit Profile
              </h3>

              <p className="text-sm text-slate-500">
                Update your personal information.
              </p>

            </div>

            <Button>
              Edit
            </Button>

          </div>

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <h3 className="font-medium">
                Change Password
              </h3>

              <p className="text-sm text-slate-500">
                Keep your account secure.
              </p>

            </div>

            <Button variant="outline">
              Change
            </Button>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-medium text-red-600">
                Logout
              </h3>

              <p className="text-sm text-slate-500">
                Sign out from your account.
              </p>

            </div>

            <Button variant="danger">
              Logout
            </Button>

          </div>

        </div>

      </Card>

    </div>
  );
}

export default Settings;