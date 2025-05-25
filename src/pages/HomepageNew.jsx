import React from 'react'
import SliderNew from '../components/Slider/SliderNew'
import NewCatgeories from '../components/NewCatgeories/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import OurWorkSection from '../components/OurWorkSection/OurWorkSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import WhyPeopleTrustEvaga from '../components/WhyPeopleTrustEvaga/WhyPeopleTrustEvaga'


function HomepageNew() {
  return (
    <div className='flex flex-col gap-2'>
        <SliderNew/>
        <NewCatgeories/>
        <WhyPeopleTrustEvaga/>
        <WhyChooseUs/>
        {/* <HowItWorks/> */}
        <OurWorkSection/>
        <TestimonialSection/>
    </div>
  )
}

export default HomepageNew