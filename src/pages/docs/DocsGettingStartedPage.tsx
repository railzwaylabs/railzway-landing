import {
  apiReferenceUrl,
  docsIndexUrl,
  docsPaymentServicesUrl,
  docsPricingVersioningUrl,
} from "../../lib/env";

export function DocsGettingStartedPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Getting Started
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          The goal is simple: define billing primitives, ingest usage with idempotency, and let the
          engine compute invoices deterministically.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Core entities</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Product</p>
            <p className="mt-1 text-sm text-slate-600">The thing you sell.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Price</p>
            <p className="mt-1 text-sm text-slate-600">
              The rating rules: flat, tiered, or hybrid.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Meter</p>
            <p className="mt-1 text-sm text-slate-600">
              The unit of usage you will ingest and aggregate.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Subscription</p>
            <p className="mt-1 text-sm text-slate-600">
              The contract that ties a customer to prices and billing cycles.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Usage Event</p>
            <p className="mt-1 text-sm text-slate-600">
              An immutable, idempotent record of billable activity.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-900">Payment</p>
            <p className="mt-1 text-sm text-slate-600">
              Orchestrated by Railzway, processed by external providers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Minimal happy path</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li>Create a product.</li>
          <li>Create a meter that matches your usage signal.</li>
          <li>Create a price that references that meter.</li>
          <li>Create a subscription for a real customer.</li>
          <li>Ingest usage with an idempotency key.</li>
          <li>Allow the billing cycle to evaluate and produce invoices.</li>
        </ol>
        <p className="text-sm text-slate-600">
          Endpoint shapes and required fields are defined in the OpenAPI spec.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Concrete example: ingest usage</h2>
        <p className="text-slate-600">
          This example uses the documented usage ingestion endpoint: <code>/api/usage</code>.
        </p>
        <div className="rounded-xl border border-slate-200 bg-slate-950 p-4 text-sm text-white">
          <pre className="overflow-x-auto">
            <code>{`curl -X POST "https://your-railzway.example.com/api/usage" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "cus_123",
    "meter_code": "api_calls",
    "idempotency_key": "evt-2026-01-25-0001",
    "recorded_at": "2026-01-25T10:00:00Z",
    "value": 42
  }'`}</code>
          </pre>
        </div>
        <p className="text-sm text-slate-600">
          Use stable idempotency keys. Replays should be safe and yield the same result.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <p>
          Source references:{" "}
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={apiReferenceUrl}>
            swagger.yaml
          </a>{" "}
          ·{" "}
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={docsIndexUrl}>
            docs/index.md
          </a>{" "}
          ·{" "}
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={docsPricingVersioningUrl}>
            pricing versioning
          </a>{" "}
          ·{" "}
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={docsPaymentServicesUrl}>
            payment orchestration
          </a>
        </p>
      </section>
    </div>
  );
}

