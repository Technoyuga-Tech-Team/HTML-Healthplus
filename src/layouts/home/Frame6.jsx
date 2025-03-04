import { LANDING_PAGE_IMAGES } from "@/constant/images";
import { howItWorksConstants } from "@/constant/staticData";
import React, { forwardRef } from "react";

const Frame6 = forwardRef((props, ref) => {
  return (
    <div>
      <div className="sif-main-wrapper" ref={ref}>
        <div className="container">
          <div className="sif-main-wrapper">
            <div className="sif-main-wrapper-left">
              <div className=" green-color-text">Why Choose Us</div>
              <div
                className="mb-3 regular-font font-size4 font-color1 line-height1"
                style={{ fontWeight: 500 }}
              >
                How It Works
              </div>
              <div className="my-3 regular-font font-size5 font-color2 fw-normal">
                Our platform was built by interpreters for Interpreters. Our
                platform automates interpreter job distribution and was designed
                to be easy to use, with a personalized experience for every
                user. Simply sign up and start getting real-time insights from
                your interpreters.
              </div>
              <div className="my-3 regular-font font-size5 font-color2 fw-normal">
                <b>Cloud-Based Technology</b>
                <br /> Our platform uses the latest cloud-based technology to
                ensure fast and accurate results every time
              </div>
              <div>
                {/* {howItWorksConstants?.map((h, index) => {
                  return (
                    <div className="py-2" key={index}>
                      <div>
                        <img
                          src={h?.image}
                          width={index == 0 ? 28 : 22}
                          height={index == 0 ? 28 : 24}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="regular-font font-size5 font-color1 fw-normal">
                        {h?.title}
                      </div>
                      <div
                        className="regular-font font-size3 font-color2 fw-normal"
                        style={{ fontSize: "16px" }}
                      >
                        {h?.desc}
                      </div>
                    </div>
                  );
                })} */}
              </div>
            </div>
            <div className="sif-main-wrapper-right">
              <img src={LANDING_PAGE_IMAGES[10]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Frame6.displayName = "SixthFrame";

export default Frame6;
