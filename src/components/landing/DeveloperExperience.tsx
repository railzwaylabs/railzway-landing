import { Section } from "../ui/Section";
import { Terminal, Copy } from "lucide-react";



export function DeveloperExperience() {
  return (
    <Section id="developers" className="bg-slate-900 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Built for your <span className="text-indigo-400">terminal</span>, not just your finance team.
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Railzway is integrated over HTTP with explicit billing primitives. The OpenAPI contract is the source of truth.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 mt-1">
                <Terminal className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">API-First Design</h4>
                <p className="text-slate-500 text-sm">Documented HTTP API with deterministic billing behavior.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">OpenAPI Contract</h4>
                <p className="text-slate-500 text-sm">Generate clients from the spec or call the API directly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <div className="relative rounded-xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-3">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="text-xs font-medium text-slate-500 flex items-center gap-2">
                usage.ts
                <Copy className="h-3 w-3 cursor-pointer hover:text-slate-300" />
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-slate-300">
                  <span className="text-slate-500">// Report usage via HTTP API</span>
                  {"\n"}
                  <span className="text-purple-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-green-400">"/api/usage"</span>, {"{"}
                  {"\n"}  method: <span className="text-green-400">"POST"</span>,
                  {"\n"}  headers: {"{"} <span className="text-green-400">"Content-Type"</span>: <span className="text-green-400">"application/json"</span> {"}"},
                  {"\n"}  body: <span className="text-yellow-400">JSON</span>.<span className="text-yellow-400">stringify</span>({"{"}
                  {"\n"}    customer_id: <span className="text-green-400">"cus_123"</span>,
                  {"\n"}    meter_code: <span className="text-green-400">"api_calls"</span>,
                  {"\n"}    idempotency_key: <span className="text-green-400">"evt-2026-01-26-0001"</span>,
                  {"\n"}    recorded_at: <span className="text-purple-400">new</span> <span className="text-yellow-400">Date</span>().<span className="text-yellow-400">toISOString</span>(),
                  {"\n"}    value: <span className="text-orange-400">1</span>
                  {"\n"}  {"}"})
                  {"\n"}{"}"});
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
