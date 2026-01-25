import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeploymentModelsSection from "../components/DeploymentModelsSection";
import TrustSection from "../components/TrustSection";
import SegmentationSection from "../components/SegmentationSection";
import { motion } from "motion/react";
import { getSectionVariants, defaultViewport } from "../lib/motion";

function DeploymentPage() {
  const { container, item } = getSectionVariants(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg-primary text-text-primary">
      <Navbar />

      {/* Header / Overview */}
      <motion.section
        className="pt-32 pb-12 px-6"
        variants={container}
        initial="hidden"
        animate="show"
        viewport={defaultViewport}
      >
        <div className="mx-auto w-full max-w-4xl text-center space-y-6">
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Deployment & Licensing
            </h1>
            <p className="text-xl text-text-secondary">
              How you run Railzway, and how licensing works.
            </p>
          </motion.div>

          <motion.div variants={item} className="max-w-2xl mx-auto pt-4">
            <p className="text-lg text-text-muted leading-relaxed">
              Railzway is designed to run on your infrastructure.
              You can use the open-source core freely, add enterprise capabilities
              through a Plus license, or choose our managed cloud when available.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Reusing existing sections that match the content requirements */}
      <DeploymentModelsSection />

      {/* Renaming title via prop if I update TrustSection, otherwise it acts as Licensing Principles */}
      <TrustSection customTitle="Licensing Principles" />

      <SegmentationSection />

      <Footer />
    </div>
  );
}

export default DeploymentPage;
