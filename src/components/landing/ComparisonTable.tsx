import { Section } from "../ui/Section";
import { Check, X } from "lucide-react";
import { architectureUrl, signupUrl } from "../../lib/env";

type Availability = "check" | "x" | string;

interface Row {
  feature: string;
  oss: Availability;
  cloud: Availability;
}

const rows: Row[] = [
  {
    feature: "Organization-scoped isolation",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Customers & subscriptions",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Meters & usage ingestion",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Rating results & usage aggregates",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Pricing models (flat, usage, tiered)",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Proration & invoice generation",
    oss: "In progress",
    cloud: "check",
  },
  {
    feature: "Ledger posting",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Products & features catalog",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Audit logs",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "API keys with scopes + IP/domain rules",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Public API (API key auth)",
    oss: "Stable",
    cloud: "check",
  },
  {
    feature: "Test clock",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Tax rate configuration",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Entitlements driven by billing",
    oss: "check",
    cloud: "check",
  },
  {
    feature: "Payment provider adapters",
    oss: "Planned",
    cloud: "check",
  },
  {
    feature: "Control plane operations",
    oss: "You manage",
    cloud: "Fully managed",
  },
  {
    feature: "Offline license",
    oss: "x",
    cloud: "N/A",
  },
  {
    feature: "SLA & priority support",
    oss: "Best effort",
    cloud: "-",
  },
  {
    feature: "Updates",
    oss: "Manual",
    cloud: "Automatic",
  },
];

const baseCellClasses = "px-6 py-4 text-center border-l border-slate-200 min-w-[170px]";
const cloudCellClasses = `${baseCellClasses} bg-indigo-50/10`;
const featureHeaderClasses =
  "px-6 py-4 font-semibold text-left min-w-[220px] sticky left-0 z-30 bg-slate-50 border-r border-slate-200";
const featureCellClasses =
  "px-6 py-4 font-medium text-slate-700 sticky left-0 z-20 bg-white border-r border-slate-200";

function renderCell(value: Availability, className: string, emphasis?: "cloud") {
  if (value === "check") {
    return (
      <td className={className}>
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      </td>
    );
  }
  if (value === "x") {
    return (
      <td className={className}>
        <X className="h-5 w-5 text-slate-300 mx-auto" />
      </td>
    );
  }
  const emphasisClasses =
    emphasis === "cloud" && (value === "Fully managed" || value === "Automatic")
        ? "text-indigo-700 font-medium"
        : "text-slate-600";

  return <td className={`${className} ${emphasisClasses}`}>{value}</td>;
}

export function ComparisonTable() {
  return (
    <Section className="py-16" id="features">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Core Railzway Features
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Extracted from the engine itself: subscriptions, usage, pricing, and invoices that stay correct under change.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent md:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:hidden" />
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 sticky top-0 z-20">
            <tr>
              <th className={featureHeaderClasses}>Feature</th>
              <th className="px-6 py-4 font-semibold text-center border-l border-slate-200 min-w-[170px]">
                Community OSS
              </th>
              <th className="px-6 py-4 font-semibold text-center border-l border-slate-200 min-w-[170px] bg-indigo-50/50 text-indigo-900">
                Railzway Cloud{" "}
                <span className="block text-xs font-normal text-indigo-700 mt-1">
                  (Coming Soon)
                </span>
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className={featureCellClasses}>{row.feature}</td>
                  {renderCell(row.oss, baseCellClasses)}
                  {renderCell(row.cloud, cloudCellClasses, "cloud")}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-24 bg-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Build billing once. Trust it forever.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={signupUrl}
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors"
            >
              Get Started
            </a>
            <a
              href={architectureUrl}
              className="border border-indigo-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-800 transition-colors"
            >
              View Architecture
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
