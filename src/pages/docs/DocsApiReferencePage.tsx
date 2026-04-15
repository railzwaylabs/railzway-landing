import { apiReferenceJsonUrl, apiReferenceUrl } from "../../lib/env";

const endpointGroups = [
  { label: "Usage events", path: "/api/v1/usage-events" },
  { label: "Customers", path: "/api/v1/customers" },
  { label: "Subscriptions", path: "/api/v1/subscriptions" },
  { label: "Invoices", path: "/api/v1/invoices" },
  { label: "Entitlement checks", path: "/api/v1/customers/:customer_id/entitlements/:feature_code" },
];

export function DocsApiReferencePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          API Reference
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          The OpenAPI specification is the canonical reference for the public API: runtime billing
          operations such as usage ingestion, customer lifecycle, subscriptions, invoices, and
          entitlement checks.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">OpenAPI source of truth</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Base path in the current public API is <code>/api/v1</code>. Use the files below as the
          definitive contract for exposed endpoints and payloads.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={apiReferenceUrl}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            swagger.yaml
          </a>
          <a
            href={apiReferenceJsonUrl}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            swagger.json
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Key endpoint groups</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Billing configuration primitives such as products, plans, prices, and meters are part of
          the engine, but they are not yet part of the external public API surface.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {endpointGroups.map((group) => (
            <li key={group.path} className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-3">
              <span className="font-medium text-slate-900">{group.label}</span>
              <code className="text-xs text-slate-600">{group.path}</code>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
