
import ButtonComp from '@/componant/ButtonComp/ButtonComp'
import { imagesForGrid } from '@/constant/staticData'
import React from 'react'

const Frame1 = () => {
  return (
    <div className='container'>
      <div className='ff-main-wrapper'>
        <div className='ff-main-wrapper-left'>
          <div className='my-3 dark-font font-size1 font-color1 line-height1 '>
            Empowering Health Innovators to Transform Lives
          </div>
          <div className='my-3 regular-font font-size2 font-color2 fw-normal' >Join the movement to revolutionize wellness and healthcare with cutting-edge solutions, expert guidance, and a community of visionaries</div>
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