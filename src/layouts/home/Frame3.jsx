
import ButtonComp from '@/componant/ButtonComp/ButtonComp'
import { LANDING_PAGE_IMAGES } from '@/constant/images'

const Frame3 = () => {
  return (
    <div className='container'>
      <div className='tf-main-wrapper'>
        <div className='tf-main-wrapper-left'>
        <img src={LANDING_PAGE_IMAGES[5]} />
        </div>
        <div className='tf-main-wrapper-right'>
          <div className='my-3 dark-font font-size1 font-color1 line-height1 '>
            About Us
          </div>
          <div className='my-3 regular-font font-size2 font-color2 fw-normal' >At <span style={{color:"var(--primary-color)"}}>interp,</span> we’re dedicated to supporting health entrepreneurs who dare to dream big. Whether you're developing breakthrough medical technologies, launching wellness programs, or innovating in patient care, we provide the resources, mentorship, and connections you need to succeed.</div>
          <div className='my-4'>
            {/* <ButtonComp
              text={"Book Appointment"}
            /> */}
          </div>
        </div>
      </div>
    </div>)
}

export default Frame3