import Badge from "../Common/Badge";
import Button from "../Common/Button";

function ComplaintRow({ complaint }) {
  const variants = {
    Open: "danger",
    Pending: "warning",
    Resolved: "success",
  };

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">

      <td className="px-6 py-4">{complaint.title}</td>

      <td className="px-6 py-4">{complaint.date}</td>

      <td className="px-6 py-4">
        <Badge variant={variants[complaint.status]}>
          {complaint.status}
        </Badge>
      </td>

      <td className="px-6 py-4">
        <Button variant="outline">
          View
        </Button>
      </td>

    </tr>
  );
}

export default ComplaintRow;