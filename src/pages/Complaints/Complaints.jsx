import ComplaintsHeader from "../../components/complaints/ComplaintsHeader";
import ComplaintsTable from "../../components/complaints/ComplaintsTable";

import { complaints } from "../../data/complaintData";

function Complaints() {
  return (
    <div className="space-y-6">

      <ComplaintsHeader />

      <ComplaintsTable complaints={complaints} />

    </div>
  );
}

export default Complaints;