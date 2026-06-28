import Card from "../Common/Card";
import Badge from "../Common/Badge";
import { paymentHistory } from "../../data/maintenanceData";

function PaymentHistory() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">
        Payment History
      </h2>

      <div className="space-y-4">

        {paymentHistory.map((payment) => (

          <div
            key={payment.id}
            className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0"
          >
            <div>
              <h3 className="font-semibold">
                {payment.month}
              </h3>

              <p className="text-sm text-slate-500">
                {payment.amount}
              </p>
            </div>

            <Badge
              variant={
                payment.status === "Paid"
                  ? "success"
                  : "warning"
              }
            >
              {payment.status}
            </Badge>

          </div>

        ))}

      </div>
    </Card>
  );
}

export default PaymentHistory;