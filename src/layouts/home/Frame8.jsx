
import ControlledAccordions from '@/componant/accordian/accordian'
import { LANDING_PAGE_IMAGES } from '@/constant/images'
import { faqConstants } from '@/constant/staticData'
import React from 'react'

const Frame8 = () => {
  return (
    <div>
      <div className='container'>
        <div className='eightf-main-wrapper'>
          <div className='eightf-main-wrapper-left my-2'>
            <img src={LANDING_PAGE_IMAGES[12]} style={{ width: "90%" }} />
            <div style={{ position: 'absolute', bottom: -10, right: 50, zIndex: -1 }}>
              <img src={LANDING_PAGE_IMAGES[14]} />
            </div>
          </div>
          <div className='eightf-main-wrapper-right'>
            <div className='mb-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>
              FAQs
            </div>
            <div className='my-3 mb-4 regular-font font-size5 font-color2 fw-normal'>
              Your health is the most important thing that you have. Without it, you cannot
              live a happy and fulfilled life.
            </div>
            <ControlledAccordions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame8