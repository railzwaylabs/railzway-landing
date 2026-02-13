import { Section } from "../ui/Section";
import { Database, FileQuestion, LockKeyhole } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Database,
    title: "Data Scattering",
    description:
      "Usage data lives in logs, databases, and random redis keys. Reconciling it at the end of the month is a nightmare.",
  },
  {
    icon: FileQuestion,
    title: "Phantom Churn",
    description:
      "Inconsistent invoices erode trust. If a customer asks 'why is my bill higher?', you can't trace it back to the event.",
  },
  {
    icon: LockKeyhole,
    title: "Pricing Lock-in",
    description:
      "Changing from flat to tiered pricing often requires a complete database migration and weeks of engineering time.",
  },
];

export function ProblemStatement() {
  return (
    <div className="bg-slate-50 border-y border-slate-200">
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your billing logic shouldn't live in{" "}
            <code className="inline-flex items-center align-middle rounded border border-slate-200 bg-white px-2 py-0.5 leading-none text-indigo-600">
              app/utils
            </code>
            .
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Scaling SaaS revenue is hard when your billing infrastructure is brittle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
