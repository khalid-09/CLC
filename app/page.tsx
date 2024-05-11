import LandingHeader from "@/components/header/landing-header";
import FAQS from "@/components/landing/frequently-asked";
import Footer from "@/components/landing/landing-footer";
import Hero from "@/components/landing/landing-hero";

const LandingPage = () => {
  return (
    <main className="m-auto max-w-6xl">
      <LandingHeader />
      <Hero />
      <FAQS />
      <Footer />
    </main>
  );
};

export default LandingPage;
