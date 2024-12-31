import { secondFrameConstants } from '@/constant/staticData'
import React from 'react'

const Frame2 = () => {
  return (
    <div className='sf-main-wrapper'>
      <div className='sf-main-wrapper-inner container'>
        {secondFrameConstants?.map((d, i) => {
          return (
            <div key={i} className='sf-main-wrapper-inner-inner my-3'>
              <div className=' dark-font font-size1 font-color1 line-height1 px-2'>{d?.number}</div>
              <div className='regular-font font-size3 font-color2 frame2-inner-text'>{d?.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Frame2