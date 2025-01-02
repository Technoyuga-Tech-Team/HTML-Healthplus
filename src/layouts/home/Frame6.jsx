
import { LANDING_PAGE_IMAGES } from '@/constant/images'
import { howItWorksConstants } from '@/constant/staticData'
import React from 'react'

const Frame6 = () => {
  return (
    <div>
      <div className='sif-main-wrapper'>
        <div className='container'>
          <div className='sif-main-wrapper'>
            <div className='sif-main-wrapper-left'>
              <div className=' green-color-text'>
                Why Choose Us
              </div>
              <div className='mb-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>
                How It Works
              </div>
              <div className='my-3 regular-font font-size5 font-color2 fw-normal'>
                We embrace a holistic approach to mental health, focusing on your journey towards emotional well-being.
              </div>
              <div>
                {
                  howItWorksConstants?.map((h, index) => {
                    return (
                      <div className='py-2' key={index}>
                        <div><img src={h?.image} width={index == 0 ? 28 : 22} height={index == 0 ? 28 : 24} style={{ objectFit: "contain" }} /></div>
                        <div className='regular-font font-size5 font-color1 fw-normal'>{h?.title}</div>
                        <div className='regular-font font-size3 font-color2 fw-normal' style={{ fontSize: "16px" }}>{h?.desc}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='sif-main-wrapper-right'>
              <img src={LANDING_PAGE_IMAGES[10]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame6