import Card from "../Common/Card";
import VisitorRow from "./VisitorRow";

function VisitorsTable({ visitors }) {
    return (
        <Card className="overflow-x-auto">

            <table className="w-full">

                <thead className="bg-slate-50">

                    <tr>

                        <th className="px-6 py-4 text-left uppercase tracking-wide text-xs font-semibold text-slate-500">
                            Name
                        </th>

                        <th className="px-6 py-4 text-left uppercase tracking-wide text-xs font-semibold text-slate-500">
                            Flat
                        </th>

                        <th className="px-6 py-4 text-left uppercase tracking-wide text-xs font-semibold text-slate-500">
                            Visit Time
                        </th>

                        <th className="px-6 py-4 text-left uppercase tracking-wide text-xs font-semibold text-slate-500">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {visitors.map((visitor) => (
                        <VisitorRow
                            key={visitor.id}
                            visitor={visitor}
                        />
                    ))}

                </tbody>

            </table>

        </Card>
    );
}

export default VisitorsTable;