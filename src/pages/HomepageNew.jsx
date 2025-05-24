import React from 'react'
import SliderNew from '../components/Slider/SliderNew'
import NewCatgeories from '../components/NewCatgeories/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'


function HomepageNew() {
  return (
    <div className='flex flex-col gap-2'>
        <SliderNew/>
        <NewCatgeories/>
        <WhyChooseUs/>
    </div>
  )
}

export default HomepageNew