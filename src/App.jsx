import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './layouts/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './comman/header';
import Footer from './comman/footer';
import Register from './layouts/register';
import { Toaster } from 'react-hot-toast';
import ContactUs from './layouts/contactUs/ContactUs';
import { useEffect, useRef } from 'react';
import { getRefToScrollSpecificPosition } from './utils';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

function AppContent() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const fraturesRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialRef = useRef(null);
  const location = useLocation()

  const smoothScrollToRef = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const getRef = localStorage.getItem("INPUT_DATA")
    if (getRef) {
      setTimeout(() => {
        getRefToScrollSpecificPosition(getRef, smoothScrollToRef, homeRef, howItWorksRef, null, fraturesRef, aboutUsRef, testimonialRef, faqRef)
        localStorage.removeItem("INPUT_DATA")
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location?.pathname]);

  return (
    <>
      <div>
        <HeaderComponent
          value={location?.pathname !== "/" ? null : "Home"}
          smoothScrollToRef={smoothScrollToRef}
          homeRef={homeRef}
          howItWorksRef={howItWorksRef}
          fraturesRef={fraturesRef}
          aboutUsRef={aboutUsRef}
        />
        <Routes>
          <Route path="/" element={<Home
            homeRef={homeRef}
            aboutUsRef={aboutUsRef}
            faqRef={faqRef}
            howItWorksRef={howItWorksRef}
            testimonialRef={testimonialRef}
          />} />
          <Route path="/register" element={<Register

          />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer
          aboutUsRef={aboutUsRef}
          howItWorksRef={howItWorksRef}
          faqRef={faqRef}
          value={location?.pathname !== "/" ? null : "Home"}
          smoothScrollToRef={smoothScrollToRef}
          testimonialRef={testimonialRef}
        />
      </div>
    </>
  )
}
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>

        <AppContent />
      </BrowserRouter>
    </>
  )
}

export default App
