import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "motion/react";
import { getSectionVariants } from "../lib/motion";

import { Badge, Button } from "./ui";
import { useRef } from "react";

function Hero() {
  const reducedMotion = useReducedMotion();
  const { container, item } = getSectionVariants(reducedMotion);

  // Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="pt-24 pb-16 perspective-1000">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col gap-6" variants={item}>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Deterministic Billing Infrastructure, on Your Terms
              </h1>
              <p className="text-balance text-lg text-text-secondary sm:text-xl">
                Run Railzway in your own infrastructure, upgrade with enterprise capabilities, or use our managed cloud — when you’re ready.
              </p>
              <p className="text-balance text-base text-text-muted border-l-2 border-accent-primary/30 pl-4">
                Railzway determines what should be billed.<br />
                It does not execute payments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href={`${import.meta.env.VITE_SITE_URL}/get-started`}>
                Get Started (Self-Hosted)
              </Button>
              <Button as="a" href="/docs" variant="secondary">
                View Documentation
              </Button>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: reducedMotion ? 0 : rotateX,
              rotateY: reducedMotion ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative rounded-2xl border border-border-strong bg-bg-primary shadow-2xl p-6 transition-colors hover:border-accent-primary/50"
            variants={item}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-muted">
              <span>Usage pipeline</span>
              <Badge variant="accent" size="sm">
                Live
              </Badge>
            </div>
            <div className="mt-6 space-y-4">
              <motion.div
                className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4"
                animate={reducedMotion ? {} : floatingAnimation}
                transition={{ delay: 0 }}
              >
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>ingest.events</span>
                  <span>+48k/min</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-bg-subtle">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent-primary/80 via-accent-glow/70 to-accent-primary/40" />
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4"
                animate={reducedMotion ? {} : floatingAnimation}
                transition={{ delay: 1 }} // Stagger float
              >
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>rating.window</span>
                  <span>02:14s</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-text-secondary">
                  <div className="rounded-lg bg-bg-subtle px-3 py-2">
                    daily
                  </div>
                  <div className="rounded-lg border border-accent-primary/30 bg-accent-primary/10 px-3 py-2 text-accent-primary">
                    realtime
                  </div>
                  <div className="rounded-lg bg-bg-subtle px-3 py-2">
                    monthly
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-border-subtle bg-bg-primary/80 p-4"
                animate={reducedMotion ? {} : floatingAnimation}
                transition={{ delay: 2 }} // Stagger float
              >
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  pricing.yaml
                </p>
                <pre className="mt-3 whitespace-pre-wrap text-xs text-text-secondary font-mono overflow-x-auto">
                  {`plan: growth
meter: api_calls
tiers:
  - up_to: 10_000
    unit_amount: 0.04`}
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
