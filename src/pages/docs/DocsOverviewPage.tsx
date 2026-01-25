import {
  apiReferenceUrl,
  architectureUrl,
  changelogUrl,
  docsIndexUrl,
  githubUrl,
  securityUrl,
} from "../../lib/env";

const sections = [
  {
    href: "/docs/getting-started",
    title: "Getting Started",
    description: "The minimal path from billing primitives to a valid invoice.",
  },
  {
    href: "/docs/concepts",
    title: "Core Concepts",
    description: "Determinism, billing cycles, and append-only financial intent.",
  },
  {
    href: "/docs/architecture",
    title: "Architecture",
    description: "Trust boundaries, planes, and what Railzway intentionally does not do.",
  },
  {
    href: "/docs/api-reference",
    title: "API Reference",
    description: "OpenAPI source of truth for endpoints and payload shapes.",
  },
];

export function DocsOverviewPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-600">
          Documentation
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Railzway Docs
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Railzway is an engineering-first billing engine. These docs prioritize correctness,
          determinism, and auditability over marketing narratives.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.description}</p>
          </a>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Source of truth</p>
        <p className="mt-2 leading-relaxed">
          The canonical documentation lives alongside the code in GitHub. When in doubt, prefer the
          repository references below.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={docsIndexUrl}>
            Docs Index
          </a>
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={architectureUrl}>
            Architecture.md
          </a>
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={apiReferenceUrl}>
            swagger.yaml
          </a>
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={securityUrl}>
            SECURITY.md
          </a>
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={changelogUrl}>
            CHANGELOG.md
          </a>
          <a className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-100" href={githubUrl}>
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

