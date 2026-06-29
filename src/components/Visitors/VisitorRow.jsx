import Badge from "../Common/Badge";
import Button from "../Common/Button";
import { HiOutlineEye } from "react-icons/hi2";

function VisitorRow({ visitor }) {

  const badgeVariant = {
    Approved: "success",
    Waiting: "warning",
    Denied: "danger",
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition">

      <td className="px-6 py-4 font-medium text-slate-800">
        {visitor.name}
      </td>

      <td className="px-6 py-4 text-slate-600">
        {visitor.flat}
      </td>

      <td className="px-6 py-4 text-slate-600">
        {visitor.visitTime}
      </td>

      <td className="px-6 py-4">
        <Badge variant={badgeVariant[visitor.status]}>
          {visitor.status}
        </Badge>
      </td>

      <td className="px-6 py-4 text-center">

        <Button variant="outline">

          <div className="flex items-center gap-2">

            <HiOutlineEye />

            View

          </div>

        </Button>

      </td>

    </tr>
  );
}

export default VisitorRow;