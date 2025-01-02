
import { LANDING_PAGE_IMAGES } from '@/constant/images'
import { extraSeventhFrameConst } from '@/constant/staticData'
import React from 'react'

const Frame7 = () => {
  return (
    <div>
      <div className='py-4' style={{ background: "var(--secondary-color)" }}>
        <div className='container'>
          <div className='sevenf-main-wrapper'>
            <div className='sevenf-main-wrapper-left my-2'>
              <img src={LANDING_PAGE_IMAGES[11]} />
            </div>
            <div className='sevenf-main-wrapper-right'>
              {
                extraSeventhFrameConst?.map((h, index) => {
                  return (
                    <div className='py-4 d-flex' style={{
                      borderBottom: extraSeventhFrameConst?.length !== index + 1 &&  "1px solid rgba(227, 232, 239, 1)"
                    }} key={index}>
                      <div style={{ marginRight: "12px", marginTop: "4px" }}><img src={h?.image} width={22} height={24} style={{ objectFit: "contain" }} /></div>
                      <div>
                        <div className='regular-font font-size5 font-color1 fw-normal'>{h?.title}</div>
                        <div className='regular-font font-size3 font-color2 fw-normal' style={{ fontSize: "16px" }}>{h?.desc}</div>
                      </div>
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

export default Frame7