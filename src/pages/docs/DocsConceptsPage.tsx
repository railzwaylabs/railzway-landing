import {
  docsAppendOnlyUrl,
  docsBillingCycleUrl,
  docsDeterminismUrl,
  docsIdempotencyUrl,
  docsObservabilityUrl,
  docsPricingVersioningUrl,
} from "../../lib/env";

const concepts = [
  {
    href: docsDeterminismUrl,
    title: "Repeatable computation",
    description: "Given the same inputs, the engine produces the same billing outputs.",
  },
  {
    href: docsBillingCycleUrl,
    title: "Billing cycles as first-class",
    description: "Billing is bounded in time and tied to explicit cycle state transitions.",
  },
  {
    href: docsPricingVersioningUrl,
    title: "Pricing versioning over time",
    description: "Pricing changes do not rewrite financial history.",
  },
  {
    href: docsAppendOnlyUrl,
    title: "Append-only financial intent",
    description: "Corrections are modeled explicitly rather than mutating past records.",
  },
  {
    href: docsIdempotencyUrl,
    title: "Idempotent usage ingestion",
    description: "Replays are expected and should be safe.",
  },
  {
    href: docsObservabilityUrl,
    title: "Explainability and observability",
    description: "Operators should be able to explain every cent on an invoice.",
  },
];

export function DocsConceptsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Core Concepts
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Railzway is designed around system properties, not growth tactics. These concepts are the
          contract you can rely on when billing becomes business critical.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {concepts.map((concept) => (
          <a
            key={concept.title}
            href={concept.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{concept.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{concept.description}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-indigo-600">
              Read in GitHub
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
