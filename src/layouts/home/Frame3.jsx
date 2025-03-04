import ButtonComp from "@/componant/ButtonComp/ButtonComp";
import { LANDING_PAGE_IMAGES } from "@/constant/images";
import { forwardRef } from "react";

const Frame3 = forwardRef((props, ref) => {
  return (
    <div className="container" ref={ref}>
      <div className="tf-main-wrapper">
        <div className="tf-main-wrapper-left">
          <img src={LANDING_PAGE_IMAGES[5]} />
        </div>
        <div className="tf-main-wrapper-right">
          <div className="my-3 dark-font font-size1 font-color1 line-height1 ">
            Our Story
          </div>
          <div className="my-3 regular-font font-size2 font-color2 fw-normal">
            At <span style={{ color: "var(--primary-color)" }}>interp,</span> we
            are passionate about providing real-time insights for interpreter.
            We know that our platform can change the way businesses schedule
            interpreters. We created a software to allow for a pieces of mind
            knowing that you will not have a costly NO SHOW appointment. Join us
            on our mission to revolutionize the world of interpreters
          </div>
          <div className="my-4">
            {/* <ButtonComp
              text={"Book Appointment"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
});

Frame3.displayName = "ThirdFrame";

export default Frame3;
