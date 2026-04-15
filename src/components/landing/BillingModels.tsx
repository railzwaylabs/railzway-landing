import { Section } from "../ui/Section";
import { Zap, Calendar, BarChart3, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const models = [
  {
    title: "Usage-Based Billing",
    icon: Zap,
    description: "Ingest usage events and aggregate them per billing cycle.",
    useCase: "API calls, GB stored",
    color: "indigo",
    className: "lg:col-span-2",
    visual: (
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L20 80 L40 60 L60 90 L80 40 L100 20 V100 H0 Z" fill="currentColor" />
        </svg>
      </div>
    )
  },
  {
    title: "Flat Subscriptions",
    icon: Calendar,
    description: "Model plan changes with clear lifecycle states. Proration workflows are in progress.",
    useCase: "Monthly retainers",
    color: "blue",
    className: "",
  },
  {
    title: "Tiered & Volume",
    icon: BarChart3,
    description: "Graduated pricing (first 10GB free) or volume discounts with explicit tiers.",
    useCase: "Enterprise deals",
    color: "slate",
    className: "lg:col-span-3",
    visual: (
      <div className="mt-6 flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-2 flex-1 rounded-full bg-slate-200 overflow-hidden">
            <div className={cn("h-full bg-indigo-500", i < 3 ? "w-full" : "w-0")}></div>
          </div>
        ))}
      </div>
    )
  }
]

export function BillingModels() {
  return (
    <Section id="models" className="bg-slate-50 border-y border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Unified Billing Models
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Model pricing strategies with clear primitives.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {models.map((model, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-all duration-300",
              model.className
            )}
          >
            <div className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
              model.color === 'indigo' && "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
              model.color === 'blue' && "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
              model.color === 'slate' && "bg-slate-100 text-slate-600 group-hover:bg-slate-800 group-hover:text-white",
            )}>
              <model.icon className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{model.title}</h3>
            <p className="text-slate-600 mb-6 max-w-sm">{model.description}</p>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <span className="uppercase tracking-wider text-xs">Best for:</span>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs border",
                model.color === 'indigo' && "bg-indigo-50 text-indigo-700 border-indigo-100",
                model.color === 'blue' && "bg-blue-50 text-blue-700 border-blue-100",
                model.color === 'slate' && "bg-slate-100 text-slate-700 border-slate-200",
              )}>
                {model.useCase}
              </span>
            </div>

            {model.visual}

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
