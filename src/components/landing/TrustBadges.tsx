import { Section } from "../ui/Section";
import { Scale, History, Clock } from "lucide-react";

export function TrustBadges() {
  return (
    <Section className="border-t border-slate-200 bg-slate-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
          Audit-Friendly Billing
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <div className="space-y-3">
          <div className="mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <History className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Audit Trails</h3>
          <p className="text-slate-500 text-sm">Audit logs for core billing actions and lifecycle events.</p>
        </div>
        <div className="space-y-3">
          <div className="mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <Scale className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Precision Rounding</h3>
          <p className="text-slate-500 text-sm">Consistent rounding for currency amounts.</p>
        </div>
        <div className="space-y-3">
          <div className="mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-slate-900">Test Clocks</h3>
          <p className="text-slate-500 text-sm">Simulate billing cycles with virtual clocks for previews.</p>
        </div>
      </div>
    </Section>
  )
}
