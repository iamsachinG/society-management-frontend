import Card from "../Common/Card";
import ComplaintRow from "./ComplaintRow";

function ComplaintsTable({ complaints }) {
  return (
    <Card>

      <table className="w-full text-left">

        <thead>

          <tr className="border-b border-slate-200">

            <th className="px-6 py-4">Complaint</th>

            <th className="px-6 py-4">Date</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {complaints.map((complaint) => (
            <ComplaintRow
              key={complaint.id}
              complaint={complaint}
            />
          ))}

        </tbody>

      </table>

    </Card>
  );
}

export default ComplaintsTable;