import LandingHeader from "@/components/header/landing-header";
import Discover from "@/components/landing/discover";
import FAQS from "@/components/landing/frequently-asked";
import Footer from "@/components/landing/landing-footer";
import Hero from "@/components/landing/landing-hero";
import { H2 } from "@/components/typography";

const LandingPage = () => {
  return (
    <main className="m-auto max-w-6xl">
      <LandingHeader />
      <Hero />
      <div className="flex flex-col items-center justify-center py-10 md:flex-row md:p-10">
        <H2 className="text-center">
          Watch your favourite{" "}
          <span className="font-bold italic text-primary/50">comedians!</span>
        </H2>
        <Discover />
      </div>
      <FAQS />
      <Footer />
    </main>
  );
};

export default LandingPage;
