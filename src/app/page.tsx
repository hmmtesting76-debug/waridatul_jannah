import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const EducationSection = dynamic(() => import("@/components/EducationSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"));
const CertificatesSection = dynamic(() => import("@/components/CertificatesSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <PortfolioSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
}
