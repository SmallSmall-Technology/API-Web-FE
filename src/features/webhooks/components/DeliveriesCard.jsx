import { Card } from "@/components/ui/Card.jsx";
import DeliveryRow, { deliveryColumnsClass } from "./DeliveryRow.jsx";

const columns = ["Event", "Event ID", "Time", "HTTP Status"];

/** Table of the most recent webhook deliveries. */
export default function DeliveriesCard({ deliveries }) {
  return (
    <Card>
      {deliveries.length === 0 ? (
        <p className="px-4 py-6 text-[14px]/[18px] text-ink-soft sm:px-7.5">No deliveries yet.</p>
      ) : (
        <div className="px-4 pb-5.25 sm:pr-6.75 sm:pl-7.5 lg:pt-6.75">
          <div
            aria-hidden
            className={`hidden border-b border-edge-strong pb-2.75 text-[14px]/[18px] font-semibold text-subtle lg:grid ${deliveryColumnsClass}`}
          >
            {columns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          <ul className="divide-y divide-edge-strong">
            {deliveries.map((delivery) => (
              <DeliveryRow key={delivery.id} delivery={delivery} />
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
