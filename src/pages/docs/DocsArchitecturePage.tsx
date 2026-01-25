import { architectureUrl, deploymentUrl, docsNotPaymentsUrl, threatModelUrl } from "../../lib/env";

const architecturePoints = [
  "Billing is isolated from payment execution.",
  "Computation is deterministic and derived from persisted inputs.",
  "Trust boundaries are explicit: ingestion, control plane, and invoicing.",
  "Operational workflows (FinOps, billing operations) are modeled as first-class domains.",
];

export function DocsArchitecturePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Architecture
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Railzway is a billing computation engine with strict boundaries. It determines what should
          be billed and orchestrates around that decision. It does not try to be everything.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Design commitments</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {architecturePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <a
          href={architectureUrl}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">ARCHITECTURE.md</h3>
          <p className="mt-2 text-sm text-slate-600">System planes, trust boundaries, and flow.</p>
        </a>
        <a
          href={docsNotPaymentsUrl}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            Why Railzway does not handle payments
          </h3>
          <p className="mt-2 text-sm text-slate-600">Scope discipline as a correctness feature.</p>
        </a>
        <a
          href={deploymentUrl}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">DEPLOYMENT.md</h3>
          <p className="mt-2 text-sm text-slate-600">Operational guidance for self-hosted setups.</p>
        </a>
        <a
          href={threatModelUrl}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300"
        >
          <h3 className="text-lg font-semibold text-slate-900">THREAT_MODEL.md</h3>
          <p className="mt-2 text-sm text-slate-600">Security assumptions and threat boundaries.</p>
        </a>
      </section>
    </div>
  );
}

