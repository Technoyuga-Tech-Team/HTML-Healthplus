import React from 'react'
import "./Footer.css"
import { footerConst1, socialMediaConstants } from '@/constant/staticData'
import { useLocation, useNavigate } from 'react-router-dom'
const Footer = () => {
    const location = useLocation()
    const nav = useNavigate()
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
                                                    <div
                                                        onClick={() => nav(f?.nav)}
                                                        style={{ cursor: "pointer", borderBottom: location?.pathname === f?.nav && "1px solid #fff" }} key={i}>{f?.text}</div>
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