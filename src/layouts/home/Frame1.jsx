
import ButtonComp from '@/componant/ButtonComp/ButtonComp'
import { imagesForGrid } from '@/constant/staticData'
import React from 'react'

const Frame1 = () => {
  return (
    <div className='container'>
      <div className='ff-main-wrapper'>
        <div className='ff-main-wrapper-left'>
          <div className='my-3 dark-font font-size1 font-color1 line-height1 '>
            Real-Time Interpreter Data Platform
          </div>
          <div className='my-3 regular-font font-size2 font-color2 fw-normal' >At INTERP, we are dedicated to providing real-time insights on interpreter data. Our platform is easy to use and provides provide access where it is needed, through our mobile app platform. We give you visibility into how and when an Interpreter will show up to your Deposition, Medical Evaluation or Court Appointment. Our technology ensures high-speed performance and airtight security. Sign up now to experience the power of INTERP.</div>
          {/* <div className='my-4'>
            <ButtonComp
            text={"Book Appointment"}
            />
          </div> */}
        </div>
        <div className='ff-main-wrapper-right'>
          <div className='ff-grid-wrapper'>
            {
              imagesForGrid?.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image?.name} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame1