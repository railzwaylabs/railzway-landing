import { githubUrl, salesMailto } from "../lib/env";
import { Badge, Button } from "./ui";

const deploymentModels = [
  {
    label: "Self-Hosted",
    badge: "Open Source",
    description: "Run Railzway entirely in your own infrastructure. Full access to the deterministic billing engine with no usage limits.",
    features: [
      "Core billing, rating, invoicing",
      "Immutable audit logs (viewable)",
      "Billing overview & revenue metrics",
      "No license required",
      "Apache / MIT licensed",
    ],
    footerNote: "You own the data. You operate the system.",
    cta: "Deploy Self-Hosted",
    ctaVariant: "secondary",
    href: githubUrl,
  },
  {
    label: "Self-Hosted Plus",
    badge: "Enterprise",
    description: "Enterprise capabilities layered on top of self-hosted Railzway. Designed for teams that need compliance, access control, and operational workflows.",
    features: [
      "Enterprise SSO & RBAC",
      "Audit log export & retention tooling",
      "Billing Operations & Exposure Analysis",
      "Revenue forecasting (read-only)",
      "Priority support",
    ],
    importantNote: "Core billing correctness is never gated by licensing.",
    cta: "Contact for Plus License",
    ctaVariant: "dark",
    href: salesMailto,
    highlighted: true,
  },
  {
    label: "Railzway Cloud",
    badge: "Coming Soon",
    description: "A fully managed Railzway control plane. For teams that prefer zero infrastructure management.",
    features: [
      "Managed upgrades",
      "Secure by default",
      "Same billing guarantees",
    ],
    disclaimer: "Cloud availability does not change the self-hosted guarantees.",
    cta: "Join Cloud Waitlist",
    ctaVariant: "outline",
    href: "#waitlist",
  },
];

function DeploymentModelsSection() {
  return (
    <section className="py-20" id="deployment">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Deployment
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Choose How You Run Railzway
          </h2>
          <p className="text-base text-text-secondary">
            Deployment choice is a feature, not a limitation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {deploymentModels.map((model) => {
            const isHighlighted = model.highlighted;
            return (
              <div
                key={model.label}
                className={[
                  "flex h-full flex-col justify-between rounded-xl border bg-bg-surface/50 p-6 backdrop-blur-sm",
                  "transition duration-base ease-standard",
                  isHighlighted
                    ? "border-accent-primary/50 bg-bg-surface-strong/60 shadow-glow lg:scale-105"
                    : "border-border-subtle hover:border-border-strong",
                ].join(" ")}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {model.label}
                    </h3>
                    <Badge
                      variant={isHighlighted ? "accent" : "neutral"}
                      size="sm"
                    >
                      {model.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-secondary">
                    {model.description}
                  </p>

                  <ul className="space-y-2 text-sm text-text-secondary">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text-muted" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {(model.footerNote || model.importantNote || model.disclaimer) && (
                    <p className="text-xs text-text-muted italic border-t border-border-subtle pt-3 mt-3">
                      {model.footerNote}
                      {model.importantNote}
                      {model.disclaimer}
                    </p>
                  )}
                </div>

                <div className="mt-8">
                  {model.ctaVariant === "secondary" && (
                    <Button as="a" href={model.href} variant="secondary">
                      {model.cta}
                    </Button>
                  )}
                  {model.ctaVariant === "outline" && (
                    <Button
                      as="a"
                      href={model.href}
                      variant="secondary"
                      className="bg-transparent text-text-secondary hover:bg-bg-surface/30"
                    >
                      {model.cta}
                    </Button>
                  )}
                  {model.ctaVariant === "dark" && (
                    <Button
                      as="a"
                      href={model.href}
                      variant="secondary"
                      className="bg-bg-surface-strong text-text-primary hover:bg-bg-surface-strong/80"
                    >
                      {model.cta}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DeploymentModelsSection;
