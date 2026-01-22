
import { Badge, Button } from "../ui";

const plans = [
  {
    label: "Free Trial",
    badge: "Sandbox",
    platformFee: "$0",
    description: "Evaluation environment.",
    isolation: "Shared Namespace",
    retention: "14 Days",
    specs: [
      { label: "Customers", value: "3" },
      { label: "Subscriptions", value: "3" },
      { label: "Monthly Events", value: "10k" },
    ],
    features: ["Community Support", "API Access"],
    cta: "Start 14-day Trial",
    ctaVariant: "secondary",
    borderColor: "border-border-subtle",
  },
  {
    label: "Starter",
    badge: "Indie Dev",
    platformFee: "$19",
    description: "For side projects.",
    isolation: "Shared Namespace",
    retention: "30 Days",
    specs: [
      { label: "Customers", value: "100" },
      { label: "Subscriptions", value: "200" },
      { label: "Monthly Events", value: "10k" },
    ],
    features: ["Email Support", "Overage allowed"],
    cta: "Start Starter",
    ctaVariant: "secondary",
    borderColor: "border-border-subtle",
  },
  {
    label: "Pro",
    badge: "Production",
    platformFee: "$39",
    description: "For SaaS businesses.",
    isolation: "Dedicated Namespace",
    retention: "90 Days",
    specs: [
      { label: "Customers", value: "1k" },
      { label: "Subscriptions", value: "2k" },
      { label: "Monthly Events", value: "50k" },
    ],
    features: ["Priority Support", "Volume Discounts"],
    cta: "Upgrade to Pro",
    ctaVariant: "primary",
    highlighted: true,
    borderColor: "border-accent-primary",
  },
  {
    label: "Team",
    badge: "Scale",
    platformFee: "$99",
    description: "High volume scale.",
    isolation: "Isolated Infra",
    retention: "1 Year",
    specs: [
      { label: "Customers", value: "10k" },
      { label: "Subscriptions", value: "25k" },
      { label: "Monthly Events", value: "200k" },
    ],
    features: ["Chat Support", "Custom Limits"],
    cta: "Contact Sales",
    ctaVariant: "outline",
    borderColor: "border-purple-500/30",
  },
  {
    label: "Enterprise",
    badge: "Mission Critical",
    platformFee: "Custom",
    description: "Unlimited scale.",
    isolation: "Dedicated Infra",
    retention: "Custom",
    specs: [
      { label: "Customers", value: "100k+" },
      { label: "Subscriptions", value: "Unlim" },
      { label: "Monthly Events", value: "Unlim" },
    ],
    features: ["Dedicated Support", "SLA guarantees"],
    cta: "Talk to Engineering",
    ctaVariant: "dark",
    borderColor: "border-amber-500/30",
  },
];

function PricingPlansSection() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge variant="neutral" size="sm" className="font-mono">
            v2.4 stable
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Usage-based billing infrastructure.
          </h1>
          <p className="text-lg text-text-secondary">
            Predictable at scale. No per-seat pricing. No hidden qualifiers.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => {
            const isHighlighted = plan.highlighted;
            return (
              <article
                key={plan.label}
                className={[
                  "flex h-full flex-col justify-between rounded-lg border bg-bg-surface/50 p-5 backdrop-blur-sm",
                  "transition duration-base ease-standard",
                  plan.borderColor,
                  isHighlighted
                    ? "bg-bg-surface-strong/60 shadow-lg ring-1 ring-accent-primary/20 scale-[1.02]"
                    : "hover:border-border-strong hover:bg-bg-surface/80",
                ].join(" ")}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-text-primary">
                        {plan.label}
                      </h2>
                      <span
                        className={[
                          "rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide font-medium",
                          isHighlighted
                            ? "bg-accent-primary/10 text-accent-primary"
                            : "bg-bg-subtle text-text-muted",
                        ].join(" ")}
                      >
                        {plan.badge}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-mono text-text-primary">
                        {plan.platformFee}
                      </span>
                      {plan.platformFee !== "Custom" && (
                        <span className="text-xs text-text-muted">/mo</span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary">
                      {plan.description}
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="space-y-3 rounded border border-border-subtle bg-bg-surface p-3 text-xs">
                    <div className="flex justify-between border-b border-border-subtle pb-2">
                      <span className="text-text-muted">Isolation</span>
                      <span className="font-mono font-medium text-text-primary">
                        {plan.isolation}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Retention</span>
                      <span className="font-mono font-medium text-text-primary">
                        {plan.retention}
                      </span>
                    </div>
                  </div>

                  {/* Limits */}
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-wider text-text-muted font-semibold">
                      Hard Limits
                    </p>
                    <ul className="space-y-1.5">
                      {plan.specs.map((spec) => (
                        <li
                          key={spec.label}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-text-secondary">
                            {spec.label}
                          </span>
                          <span className="font-mono text-text-primary">
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    as="a"
                    href="#get-started"
                    variant={plan.ctaVariant as any}
                    className="w-full justify-center"
                    size="sm"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs font-mono text-text-muted">
          * Exceeding quotas on Starter/Pro results in overage charges at metered rates. Free Trial pauses ingestion.
        </p>
      </div>
    </section>
  );
}

export default PricingPlansSection;
