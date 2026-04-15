import { useEffect, useState, type ReactNode } from "react";

import { Button } from "../components/ui/Button";
import {
  githubIssuesUrl,
  githubUrl,
  loginUrl,
  signupUrl,
  supportMailto,
} from "../lib/env";

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const hasCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("railzway_is_logged_in=true"));
      setIsLoggedIn(!!hasCookie);
    };
    checkLogin();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              R
            </span>
            Railzway
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="/#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="/#models" className="hover:text-indigo-600 transition-colors">Billing Models</a>
            <a href="/#developers" className="hover:text-indigo-600 transition-colors">Developers</a>
            <a href="/docs" className="hover:text-indigo-600 transition-colors">Docs</a>
          </nav>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <Button as="a" href={`${import.meta.env.VITE_SITE_URL}/dashboard`} size="sm">
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button as="a" href={loginUrl} variant="ghost" size="sm" className="hidden md:flex">
                  Sign In
                </Button>
                <Button as="a" href={signupUrl} size="sm">
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  R
                </span>
                Railzway
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                The open-source billing engine for SaaS teams. Built for clear billing primitives and evolving workflows.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/#features" className="hover:text-indigo-600">Features</a></li>
                <li><a href="/#models" className="hover:text-indigo-600">Billing Models</a></li>
                <li><a href="/#developers" className="hover:text-indigo-600">Developers</a></li>
                <li><a href="/docs" className="hover:text-indigo-600">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/docs" className="hover:text-indigo-600">Docs</a></li>
                <li><a href={githubIssuesUrl} className="hover:text-indigo-600">Community</a></li>
                <li><a href={githubUrl} className="hover:text-indigo-600">GitHub</a></li>
                <li><a href={supportMailto} className="hover:text-indigo-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><span className="text-slate-400">Privacy (Coming Soon)</span></li>
                <li><span className="text-slate-400">Terms (Coming Soon)</span></li>
                <li><span className="text-slate-400">Security (Coming Soon)</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Railzway Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
