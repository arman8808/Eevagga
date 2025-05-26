import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import OurWorkSection from "../components/OurWorkSection/OurWorkSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ServicesSection from "../components/ServiceWeOffer/ServiceWeOffer";

function OurService() {
  return (
    <div>
      <HeroSection />
      <ServicesSection/>
      <WhyChooseUs />
      <OurWorkSection />
      <FAQSection />
    </div>
  );
}

export default OurService;
