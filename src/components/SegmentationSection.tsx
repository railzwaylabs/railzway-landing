import { motion, useReducedMotion } from "motion/react";
import { defaultViewport, getSectionVariants } from "../lib/motion";
import { Surface } from "./ui";

const segments = [
  {
    label: "Startups",
    recommendation: "Self-Hosted",
    description: "Get started for free with full power.",
  },
  {
    label: "Growing SaaS",
    recommendation: "Self-Hosted Plus",
    description: "Add compliance and operational tools.",
  },
  {
    label: "Large Teams",
    recommendation: "Railzway Cloud",
    description: "Offload infrastructure management (Coming Soon).",
  },
];

function SegmentationSection() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  return (
    <motion.section
      className="py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
            Finding the right fit
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {segments.map((segment) => (
            <motion.div key={segment.label} variants={item}>
              <Surface tone="subtle" className="h-full p-6 text-center hover:border-border-strong transition-colors">
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {segment.label}
                </h3>
                <div className="text-xs uppercase tracking-wider text-accent-primary font-semibold mb-3">
                  → {segment.recommendation}
                </div>
                <p className="text-sm text-text-muted">
                  {segment.description}
                </p>
              </Surface>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SegmentationSection;
