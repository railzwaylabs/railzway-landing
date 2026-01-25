import { changelogUrl, releaseStrategyUrl } from "../../lib/env";

export function DocsChangelogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Changelog
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Releases are tag-driven and documented in the repository. Prefer the GitHub files as the
          canonical record of change.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <a
          href={changelogUrl}
          className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">CHANGELOG.md</h2>
          <p className="mt-2 text-sm text-slate-600">All notable changes to the system.</p>
        </a>
        <a
          href={releaseStrategyUrl}
          className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">RELEASE.md</h2>
          <p className="mt-2 text-sm text-slate-600">How releases are cut and versioned.</p>
        </a>
      </div>
    </div>
  );
}

