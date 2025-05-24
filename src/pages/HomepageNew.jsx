import React from 'react'
import SliderNew from '../components/Slider/SliderNew'
import HowItWorks from '../components/HowItWorks/HowItWorks'

function HomepageNew() {
  return (
    <div className='flex flex-col gap-2'>
        <SliderNew/>
        <HowItWorks/>
    </div>
  )
}

export default HomepageNew