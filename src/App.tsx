import { LandingLayout } from "./layouts/LandingLayout";
import { Hero } from "./components/landing/Hero";
import { ProblemStatement } from "./components/landing/ProblemStatement";
import { SolutionOverview } from "./components/landing/SolutionOverview";
import { BillingModels } from "./components/landing/BillingModels";
import { TechnicalFlow } from "./components/landing/TechnicalFlow";
import { DeveloperExperience } from "./components/landing/DeveloperExperience";
import { TrustBadges } from "./components/landing/TrustBadges";
import { ComparisonTable } from "./components/landing/ComparisonTable";
import PricingPage from "./pages/PricingPage";
import DeploymentPage from "./pages/DeploymentPage";
import { DocsLayout } from "./layouts/DocsLayout";
import { DocsOverviewPage } from "./pages/docs/DocsOverviewPage";
import { DocsGettingStartedPage } from "./pages/docs/DocsGettingStartedPage";
import { DocsConceptsPage } from "./pages/docs/DocsConceptsPage";
import { DocsArchitecturePage } from "./pages/docs/DocsArchitecturePage";
import { DocsApiReferencePage } from "./pages/docs/DocsApiReferencePage";
import { DocsIntegrationsPage } from "./pages/docs/DocsIntegrationsPage";
import { DocsSecurityPage } from "./pages/docs/DocsSecurityPage";
import { DocsChangelogPage } from "./pages/docs/DocsChangelogPage";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const normalizedPath = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;

  if (normalizedPath === "/pricing") {
    return <PricingPage />;
  }

  if (normalizedPath === "/deployment") {
    return <DeploymentPage />;
  }

  if (normalizedPath.startsWith("/docs")) {
    let page = <DocsOverviewPage />;
    if (normalizedPath === "/docs/getting-started") page = <DocsGettingStartedPage />;
    if (normalizedPath === "/docs/concepts") page = <DocsConceptsPage />;
    if (normalizedPath === "/docs/architecture") page = <DocsArchitecturePage />;
    if (normalizedPath === "/docs/api-reference") page = <DocsApiReferencePage />;
    if (normalizedPath === "/docs/integrations") page = <DocsIntegrationsPage />;
    if (normalizedPath === "/docs/security") page = <DocsSecurityPage />;
    if (normalizedPath === "/docs/changelog") page = <DocsChangelogPage />;

    return <DocsLayout currentPath={normalizedPath}>{page}</DocsLayout>;
  }

  return (
    <LandingLayout>
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <BillingModels />
      <TechnicalFlow />
      <DeveloperExperience />
      <TrustBadges />
      <ComparisonTable />
    </LandingLayout>
  );
}

export default App;
