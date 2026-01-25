import { apiReferenceJsonUrl, apiReferenceUrl } from "../../lib/env";

const endpointGroups = [
  { label: "Products", path: "/api/products" },
  { label: "Prices", path: "/api/prices" },
  { label: "Meters", path: "/api/meters" },
  { label: "Subscriptions", path: "/api/subscriptions" },
  { label: "Usage ingestion", path: "/api/usage" },
  { label: "Invoices", path: "/api/invoices" },
  { label: "Customers", path: "/api/customers" },
];

export function DocsApiReferencePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          API Reference
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          The OpenAPI specification is the canonical reference for endpoints, request shapes, and
          response contracts.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">OpenAPI source of truth</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Base path in the spec is <code>/api</code>. Use the files below as the definitive contract.
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

