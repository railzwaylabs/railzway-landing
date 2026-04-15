import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              v1.0 is now available
            </div> */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
              Billing that adapts to how your product <span className="text-indigo-600">actually charges</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              The open-source billing engine for subscription and usage pricing. Ingest usage, aggregate it, and prepare invoice-ready results as your pipeline evolves—without platform lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="/docs/getting-started" size="lg" className="gap-2 group">
                Start Integration
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button as="a" href="/docs" variant="outline" size="lg">
                Read the Docs
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500 max-w-lg">
              Not a payment processor. Railzway focuses on billing logic and works alongside your existing payment stack.
            </p>
            <div className="mt-8 flex gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                Open Source
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                Idempotent Ingestion
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                Audit Logs
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Flow Diagram Visual */}
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl p-6 md:p-8 z-10">
            <div className="flex flex-col gap-6">
              {/* Step 1: Ingest */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Usage Events</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">POST /api/v1/usage-events</div>
                </div>
                <div className="ml-auto text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full font-medium">Ingest</div>
              </div>

              {/* Connector */}
              <div className="ml-6 h-6 border-l-2 border-dashed border-slate-200"></div>

              {/* Step 2: Meter */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Meter Aggregation</div>
                  <div className="text-xs text-slate-500">SUM(bytes) GROUP BY hour</div>
                </div>
              </div>

              {/* Connector */}
              <div className="ml-6 h-6 border-l-2 border-dashed border-slate-200"></div>

              {/* Step 3: Rate/Invoice */}
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Invoice #INV-2024-001</span>
                  <span className="text-xs font-bold text-indigo-600">$124.50</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Pro Plan (Flat)</span>
                    <span className="text-slate-900 font-medium">$29.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Storage (Usage)</span>
                    <span className="text-slate-900 font-medium">$95.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
