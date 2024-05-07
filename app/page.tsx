import LandingHeader from "@/components/header/landing-header";
import FAQS from "@/components/landing/FAQS";
import Hero from "@/components/landing/Hero";

const LandingPage = () => {
  return (
    <main className="text-center">
      <LandingHeader />
      <Hero />
      <FAQS />
    </main>
  );
};

export default LandingPage;
