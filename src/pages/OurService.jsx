import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import OurWorkSection from "../components/OurWorkSection/OurWorkSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ServicesSection from "../components/ServiceWeOffer/ServiceWeOffer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import OurServiceCta from "../components/OurServiceCta/OurServiceCta";

function OurService() {
  return (
    <div>
      <HeroSection />
      <ServicesSection/>
      <WhyChooseUs />
      <OurWorkSection />
       <HowItWorks/>
       <OurServiceCta/>
      <FAQSection />
    </div>
  );
}

export default OurService;
