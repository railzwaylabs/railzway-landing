const withHttps = (url: string | undefined, fallback: string): string => {
  if (!url || url.trim().length === 0) {
    return fallback;
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

const mailtoFromEmail = (email: string | undefined, fallback: string): string => {
  if (!email || email.trim().length === 0) {
    return fallback;
  }
  if (email.startsWith("mailto:")) {
    return email;
  }
  return `mailto:${email}`;
};

export const githubUrl = withHttps(
  import.meta.env.VITE_GITHUB_URL,
  "https://github.com/railzwaylabs/railzway",
);

export const siteUrl = withHttps(
  import.meta.env.VITE_SITE_URL,
  "https://railzway.com",
);

export const salesEmail = import.meta.env.VITE_SALES_EMAIL || "sales@railzway.com";
export const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL || "support@railzway.com";

export const salesMailto = mailtoFromEmail(salesEmail, "mailto:sales@railzway.com");
export const supportMailto = mailtoFromEmail(supportEmail, "mailto:support@railzway.com");

export const loginUrl = `${siteUrl}/login`;
export const signupUrl = `${siteUrl}/signup`;
export const dashboardUrl = `${siteUrl}/dashboard`;
export const architectureUrl = `${githubUrl}/blob/main/ARCHITECTURE.md`;
export const docsIndexUrl = `${githubUrl}/blob/main/docs/index.md`;
export const docsBillingCycleUrl = `${githubUrl}/blob/main/docs/billing-cycle-as-a-first-class-concept.md`;
export const docsDeterminismUrl = `${githubUrl}/blob/main/docs/how-billing-stays-deterministic.md`;
export const docsPricingVersioningUrl = `${githubUrl}/blob/main/docs/pricing-versioning-and-effective-dates.md`;
export const docsPaymentServicesUrl = `${githubUrl}/blob/main/docs/payment-services.md`;
export const docsAppendOnlyUrl = `${githubUrl}/blob/main/docs/why-billing-is-append-only.md`;
export const docsIdempotencyUrl = `${githubUrl}/blob/main/docs/idempotency-and-usage-ingestion.md`;
export const docsObservabilityUrl = `${githubUrl}/blob/main/docs/observability-and-billing-explainability.md`;
export const docsNotPaymentsUrl = `${githubUrl}/blob/main/docs/why-railzway-does-not-handle-payments.md`;
export const apiReferenceUrl = `${githubUrl}/blob/main/docs/swagger.yaml`;
export const apiReferenceJsonUrl = `${githubUrl}/blob/main/docs/swagger.json`;
export const securityUrl = `${githubUrl}/blob/main/SECURITY.md`;
export const changelogUrl = `${githubUrl}/blob/main/CHANGELOG.md`;
export const githubIssuesUrl = `${githubUrl}/issues`;
export const threatModelUrl = `${githubUrl}/blob/main/THREAT_MODEL.md`;
export const deploymentUrl = `${githubUrl}/blob/main/DEPLOYMENT.md`;
export const paymentAdaptersUrl = `${githubUrl}/tree/main/internal/payment/adapters`;
export const releaseStrategyUrl = `${githubUrl}/blob/main/RELEASE.md`;
