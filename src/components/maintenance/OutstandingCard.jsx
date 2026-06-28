import Card from "../Common/Card";
import Badge from "../Common/Badge";
import { maintenanceSummary } from "../../data/maintenanceData";

function OutstandingCard() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">
        Outstanding Summary
      </h2>

      <div className="space-y-5">

        <InfoRow
          label="Outstanding Amount"
          value={maintenanceSummary.outstandingAmount}
        />

        <InfoRow
          label="Due Date"
          value={maintenanceSummary.dueDate}
        />

        <div className="flex justify-between items-center">
          <span className="font-medium text-slate-600">
            Status
          </span>

          <Badge variant="warning">
            {maintenanceSummary.status}
          </Badge>
        </div>

      </div>
    </Card>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium text-slate-600">
        {label}
      </span>

      <span className="font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default OutstandingCard;