import type { ReactNode } from "react";

import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { githubUrl, supportMailto } from "../lib/env";

interface DocsLayoutProps {
  children: ReactNode;
  currentPath: string;
}

const docsNav = [
  { href: "/docs", label: "Overview", exact: true },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/concepts", label: "Concepts" },
  { href: "/docs/architecture", label: "Architecture" },
];

const isActive = (href: string, currentPath: string, exact?: boolean) => {
  if (exact) {
    return currentPath === href;
  }
  return currentPath === href || currentPath.startsWith(`${href}/`);
};

export function DocsLayout({ children, currentPath }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                R
              </span>
              Railzway
            </a>
            <div className="flex items-center gap-3">
              <Button as="a" href="/" variant="ghost" size="sm">
                Back to Landing
              </Button>
              <Button as="a" href={githubUrl} variant="outline" size="sm">
                GitHub
              </Button>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2">
            {docsNav.map((item) => {
              const active = isActive(item.href, currentPath, item.exact);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:text-sm",
                    active
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-slate-500">Prefer the repository docs when in doubt.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-indigo-600" href="/docs">
              Docs
            </a>
            <a className="hover:text-indigo-600" href={githubUrl}>
              GitHub
            </a>
            <a className="hover:text-indigo-600" href={supportMailto}>
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
