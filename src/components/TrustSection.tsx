import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";

const principles = [
  {
    title: "Deterministic billing by design",
    description: "Inputs are immutable. Rating is reproducible. Your billing ledger is a source of truth.",
  },
  {
    title: "Offline-first license verification",
    description: "No phone-home requirement for core functionality. Your infrastructure remains air-gapped if needed.",
  },
  {
    title: "No forced telemetry",
    description: "We believe in consent. You choose what data to share, if any.",
  },
  {
    title: "Clear separation of concerns",
    description: "Billing logic is decoupled from payments and operational workflows, reducing risk.",
  },
  {
    title: "Self-hosted always supported",
    description: "We are committed to maintaining the self-hosted deployment model as a first-class citizen.",
  },
];

function TrustSection({ customTitle, customDescription }: { customTitle?: string, customDescription?: string }) {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20 bg-bg-surface/30 border-y border-border-subtle"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            {customTitle ? "Principles" : "Trust"}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {customTitle || "Built for Trust, Not Lock-In"}
          </h2>
          {customDescription && (
            <p className="text-base text-text-secondary">
              {customDescription}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={item} className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary">
                {principle.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TrustSection;
