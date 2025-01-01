
import ButtonComp from '@/componant/ButtonComp/ButtonComp'
import { bookAppointmentConstants } from '@/constant/staticData'
import React from 'react'

const Frame5 = () => {
  return (
    <div className='container' style={{ marginBottom: "40px", marginTop: "60px" }}>
      <div className=' green-color-text'>
        What We Offer
      </div>
      <div className='mb-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>
        Why Book an Appointment?
      </div>
      <div className='my-3 regular-font font-size5 font-color2 fw-normal'>
        We believe mental health is a journey, and every journey deserves personalized guidance.
      </div>

      <div className='fif-grid-wrapper'>
        {bookAppointmentConstants?.map((b) => {
          return (
            <div className='fif-grid-wrapper-inner' key={b?.id} style={{ background: b?.backgroundColor }}>
              <div className=' regular-font font-size5 font-color1 fw-normal'>
                {b?.title}
              </div>
              <div className='fif-grid-inner-wrapper'>
                <div className='fif-rm-btn-container'>
                  <ButtonComp
                    text={"Read More"}
                    color={"rgba(8, 126, 65, 1)"}
                    border ={"1px solid rgba(8, 126, 65, 1)"}
                    background={"#fff"}
                  />
                </div>
                <div>
                  <img src={b?.image}  />
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Frame5