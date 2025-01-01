
import ButtonComp from '@/componant/ButtonComp/ButtonComp'
import { LANDING_PAGE_IMAGES } from '@/constant/images'

const Frame4 = () => {
  return (
    <div className='fof-main-wrapper'>
      <div className='container'>
        <div className='fof-main-wrapper'>
          <div className='fof-main-wrapper-left my-2'>
            <div className='my-3 regular-font font-size4 font-color1 line-height1' style={{ fontWeight: 500 }}>
              Book an Appointment
            </div>
            <div className='regular-font font-size3 font-color1'>Personalized Guidance to Propel Your Vision Forward</div>
            <div className='my-3 regular-font font-size5 font-color2 fw-normal' >Our appointment system makes it easy for you to connect with experts, mentors, or team members to discuss your entrepreneurial journey.</div>
          </div>
          <div className='fof-main-wrapper-right'>
            <img src={LANDING_PAGE_IMAGES[6]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame4