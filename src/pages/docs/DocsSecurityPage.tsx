import { securityUrl, supportMailto, threatModelUrl } from "../../lib/env";

export function DocsSecurityPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Security
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Railzway reduces risk primarily by minimizing scope. It is a billing computation engine and
          intentionally avoids storing payment instruments.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Security references</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use the repository documents as the authoritative security posture.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <a className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-200" href={securityUrl}>
            SECURITY.md
          </a>
          <a className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-200" href={threatModelUrl}>
            THREAT_MODEL.md
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-sm text-indigo-900">
        <p className="font-semibold">Responsible disclosure</p>
        <p className="mt-1 leading-relaxed">
          For security reports, use a private channel. Until a dedicated security inbox is published,
          contact us directly via email.
        </p>
        <a className="mt-3 inline-flex font-medium text-indigo-700 hover:text-indigo-600" href={supportMailto}>
          Report a security issue
        </a>
      </section>
    </div>
  );
}

