import { Section } from "../ui/Section";
import { ShieldCheck, GitBranch } from "lucide-react";
import { motion } from "motion/react";

export function SolutionOverview() {
  return (
    <Section className="overflow-hidden">
      <div className="space-y-24">
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-full bg-indigo-50 w-12 h-12 flex items-center justify-center text-indigo-600 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Traceable by Design.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Billing results are derived from stored inputs and audit logs. When needed, you can re-run billing from the same usage, prices, and cycles to explain outcomes over time. Railzway treats billing as an explicit pipeline, not a series of mutable scripts.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Stored usage events and rating outputs
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Audit trail for core billing actions
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-2xl rotate-1 cursor-default"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 bg-slate-50/50">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  <div>
                    <div className="text-slate-400"># Read a generated invoice</div>
                    <div className="text-indigo-600">GET /api/v1/invoices/:invoice_id</div>
                  </div>
                  <div className="pl-4 border-l-2 border-indigo-100">
                    <div className="text-slate-400">// Public API returns stored billing output</div>
                    <div className="text-slate-900">invoice.status: <span className="text-green-600">"open"</span></div>
                    <div className="text-slate-900">invoice.total: <span className="text-purple-600">45000</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature 2 (Flipped) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <motion.div
              className="rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-2xl -rotate-1"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 bg-slate-50/50">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-slate-500 mb-2">config/plans.ts</div>
                  <pre className="text-slate-900 overflow-x-auto">
                    {`export const ProPlan = definePlan({
  id: "plan_pro",
  interval: "month",
  charges: [
    { type: "flat", amount: 2900 },
    { 
      type: "usage", 
      meter: "api_calls",
      tiers: [
        { upTo: 10000, price: 0 },
        { upTo: "inf", price: 0.001 }
      ]
    }
  ]
});`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-full bg-indigo-50 w-12 h-12 flex items-center justify-center text-indigo-600 mb-6">
              <GitBranch className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Structured Pricing Models.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Define plans, meters, and tiers with explicit fields. Track pricing changes over time so you can explain what happened and when.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                Versioned pricing changes
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                Clear primitives (meters, tiers, intervals)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
