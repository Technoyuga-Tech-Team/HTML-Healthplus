import StarComponant from '@/componant/ButtonComp/starComponant'
import TestimonialSlider from '@/componant/testimonialSlider/TestimonialSlider'
import { LANDING_PAGE_IMAGES } from '@/constant/images'
import { TESTIMONIAL_CONST } from '@/constant/staticData'
import React, { forwardRef } from 'react'

const Frame9 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='p-4' style={{ background: "var(--secondary-color)" }}>
            <div className='container' style={{ marginBottom: "40px", marginTop: "60px" }}>
                <div className=' green-color-text'>
                    Testimonials
                </div>
                <div className='mb-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>
                    What Our Clients Say
                </div>

                <TestimonialSlider data={TESTIMONIAL_CONST} />

            </div>
        </div>
    )
})

Frame9.displayName = 'NineFrame';


export default Frame9