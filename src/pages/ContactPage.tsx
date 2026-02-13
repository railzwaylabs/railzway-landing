import { LandingLayout } from "../layouts/LandingLayout";
import { ContactForm } from "../components/content/ContactForm";

export default function ContactPage() {
  return (
    <LandingLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about Railzway? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </LandingLayout>
  );
}
