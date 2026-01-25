import { docsNotPaymentsUrl, docsPaymentServicesUrl, paymentAdaptersUrl } from "../../lib/env";

const supportedProviders = ["Stripe", "Xendit", "Adyen", "Braintree"];

export function DocsIntegrationsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Integrations
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Railzway is provider-agnostic by design. Billing correctness is the primary concern. Fund
          movement is delegated to specialized payment providers.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">What Railzway owns</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Usage ingestion, aggregation, and rating.</li>
          <li>Subscription lifecycle and billing cycles.</li>
          <li>Invoice state transitions and audit trails.</li>
          <li>Payment orchestration, not payment processing.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Supported today</h2>
        <p className="mt-2 text-sm text-slate-600">
          Payment adapters exist in the repository for the providers below.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {supportedProviders.map((provider) => (
            <span
              key={provider}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
            >
              {provider}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={docsPaymentServicesUrl}>
            Payment orchestration docs
          </a>
          <span className="text-slate-300">·</span>
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={paymentAdaptersUrl}>
            Adapter source code
          </a>
          <span className="text-slate-300">·</span>
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={docsNotPaymentsUrl}>
            Scope boundaries
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        <p className="font-semibold">Integration posture</p>
        <p className="mt-1 leading-relaxed">
          If an integration is not documented or present in the repository, treat it as not yet
          supported. Prefer explicit adapters and documented contracts over implied compatibility.
        </p>
      </section>
    </div>
  );
}

