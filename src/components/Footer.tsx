import { githubUrl, supportMailto } from "../lib/env";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p>Railzway © {year}</p>
          <p className="text-xs text-text-muted/60">
            Railzway Cloud is optional. Self-Hosted and Self-Hosted Plus remain first-class deployment models.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a
            href={githubUrl}
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href={supportMailto}
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            Support
          </a>
          <a
            href="/docs"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            Docs
          </a>
          <a
            href="#license"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            License
          </a>
          <a
            href="#privacy"
            className="transition duration-base ease-standard hover:text-text-primary"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
