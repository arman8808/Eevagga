import SliderNew from '../components/Slider/SliderNew'
import NewCatgeories from '../components/NewCatgeories/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import OurWorkSection from '../components/OurWorkSection/OurWorkSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import WhyPeopleTrustEvaga from '../components/WhyPeopleTrustEvaga/WhyPeopleTrustEvaga'
import RealStories from '../components/RealStories/RealStories'
import ExpertSection from '../components/ExpertSection/ExpertSection'
import FAQSection from '../components/FAQSection/FAQSection'


function HomepageNew() {
  return (
    <div className='flex flex-col gap-2'>
        <SliderNew/>
        <NewCatgeories/>
        <WhyPeopleTrustEvaga/>
        <RealStories/>
        <HowItWorks/>
        <ExpertSection/>
        <WhyChooseUs/>
        <OurWorkSection/>
        <FAQSection/>
    </div>
  )
}

export default HomepageNew