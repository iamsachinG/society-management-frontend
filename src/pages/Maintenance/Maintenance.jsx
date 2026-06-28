import MaintenanceHeader from "../../components/maintenance/MaintenanceHeader";
import OutstandingCard from "../../components/maintenance/OutstandingCard";
import PayNowButton from "../../components/maintenance/PayNowButton";
import PaymentHistory from "../../components/maintenance/PaymentHistory";

function Maintenance() {
  return (
    <div className="space-y-6">

      <MaintenanceHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-1">
          <OutstandingCard />
          <PayNowButton />
        </div>

        <div className="lg:col-span-2">
          <PaymentHistory />
        </div>

      </div>

    </div>
  );
}

export default Maintenance;