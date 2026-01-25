const steps = [
  {
    title: "Ingest & Meter",
    desc: "Send raw usage events via the HTTP API. We meter and aggregate them within explicit billing cycles.",
  },
  {
    title: "Rate & Invoice",
    desc: "At cycle end, we apply your pricing model to generate draft invoices for review.",
  },
  {
    title: "Sync & Collect",
    desc: "Finalized invoices can be synced to payment providers or ledgers via configured adapters.",
  },
];

function PricingHowItWorksSection() {
  return (
    <section className="py-20 border-b border-border-subtle/50">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
            Deterministic billing lifecycle.
          </h2>
          <p className="mt-2 text-base text-text-secondary">
            From ingestion to invoice, every step is traced and auditable.
          </p>
        </div>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-bg-surface-strong font-mono text-xs font-medium text-text-primary border border-border-strong">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-text-primary">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pl-9 md:pl-0">
                {step.desc}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-3 -right-4 w-8 border-t border-border-strong/50" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default PricingHowItWorksSection;
