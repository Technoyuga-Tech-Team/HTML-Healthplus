import StarComponant from '@/componant/ButtonComp/starComponant'
import { LANDING_PAGE_IMAGES } from '@/constant/images'
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
                <div className='ninef-main-wrapper'>
                    <div className='ninef-main-wrapper-left my-2'>
                        <img src={LANDING_PAGE_IMAGES[13]} />
                    </div>
                    <div className='ninef-main-wrapper-right'>
                        <div>
                            <StarComponant
                                value={5}
                                size={32}
                                edit={false} />
                        </div>
                        <div className='regular-font font-size5 font-color2 fw-normal'>
                            "Serenity Haven Wellness transformed my life. The support and guidance I received were truly invaluable."
                        </div>
                        <div className='my-4'>
                            <div className='regular-font font-size3 font-color1 fw-normal'>Sarah Michels</div>
                            <div className='regular-font font-size3 font-color1 fw-normal' style={{ fontSize: "14px" }}>Client</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})

Frame9.displayName = 'NineFrame';


export default Frame9