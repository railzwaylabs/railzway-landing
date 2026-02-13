import { Section } from "../ui/Section";
import { motion } from "motion/react";


const steps = [
  { number: "01", title: "Ingest", desc: "Send raw events via the HTTP API" },
  { number: "02", title: "Meter", desc: "Aggregate usage within a billing cycle" },
  { number: "03", title: "Rate", desc: "Apply versioned pricing rules consistently" },
  { number: "04", title: "Invoice", desc: "Produce invoices that can be explained and replayed" }
];

export function TechnicalFlow() {
  return (
    <Section className="py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How It Works
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-slate-100 z-0"></div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="h-14 w-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xl font-bold text-slate-900 mb-6 relative">
                {step.number}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-32px] w-0.5 h-8 bg-slate-100"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
