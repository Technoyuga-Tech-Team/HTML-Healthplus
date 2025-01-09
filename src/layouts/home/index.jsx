import React, { useEffect } from 'react'
import Frame1 from './Frame1'
import './index.css'
import Frame2 from './Frame2'
import Frame3 from './Frame3'
import Frame4 from './Frame4'
import Frame5 from './Frame5'
import Frame6 from './Frame6'
import Frame7 from './Frame7'
import Frame8 from './Frame8'
import Frame9 from './Frame9'
import Footer from '@/comman/footer'
import HeaderComponent from '@/comman/header'

const Home = ({ homeRef, aboutUsRef,
  howItWorksRef,
  faqRef,
  testimonialRef
}) => {

  return (
    <div ref={homeRef}>
      <Frame1 />
      <Frame2 />
      <Frame3
        ref={aboutUsRef} />
      <Frame4 />
      <Frame5 />
      <Frame6 ref={howItWorksRef} />
      <Frame7 />
      <Frame8 ref={faqRef} />
      <Frame9 ref={testimonialRef} />
    </div>
  )
}

export default Home