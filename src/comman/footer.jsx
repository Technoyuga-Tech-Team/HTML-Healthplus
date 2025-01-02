import React from 'react'
import "./Footer.css"
import { footerConst1, socialMediaConstants } from '@/constant/staticData'
const Footer = () => {
    return (
        <div className='footer-main-wrappeer'>
            <div className='container'>
                <div className='footer-main-wrapper-inner'>
                    <div className='footer-main-wrapper-inner-left'>
                        <div className='fs-3 font-medium py-2'>About Us</div>
                        <div className='regular-font font-size3 fw-normal'>"Our mission is to accelerate health innovation by fostering creativity, collaboration, and impact-driven entrepreneurship. Together, we’re building a healthier, more sustainable future."</div>
                        <div className='d-flex py-4 align-items-center'>
                            {
                                socialMediaConstants?.map((sc, i) => {
                                    return (
                                        <div key={i} style={{ marginRight: "20px" }}>
                                            {sc?.img}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='footer-main-wrapper-inner-right'>
                        <div className='footer-main-wrapper-inner-right1'>
                            {
                                footerConst1?.map((fc, index) => {
                                    return (
                                        <div key={index} className='footer-main-wrapper-inner-right1-left' style={{ marginRight: "60px" }}>
                                            <div className='fw-bold'>{fc?.title}</div>
                                            {fc?.data?.map((f, i) => {
                                                return (
                                                    <div key={i}>{f}</div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer