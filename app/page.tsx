import LandingHeader from "@/components/header/landing-header";
import FAQS from "@/components/landing/FAQS";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";

const LandingPage = () => {
  return (
    <main className="text-center">
      <LandingHeader />
      <Hero />
      <FAQS />
      <Footer />
    </main>
  );
};

export default LandingPage;
