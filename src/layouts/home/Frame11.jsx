import ButtonComp from "@/componant/ButtonComp/ButtonComp";
import { whyChooseInterp } from "@/constant/staticData";
import React from "react";

const Frame11 = () => {
  return (
    <div
      className="container"
      style={{ marginBottom: "40px", marginTop: "60px" }}
    >
      <div
        className="mb-3 regular-font font-size4 font-color1 line-height1"
        style={{ fontWeight: 500 }}
      >
        Why Choose INTERP ?
      </div>
      <div className="my-3 regular-font font-size5 font-color2 fw-normal">
        Real-time Interpreter Data Insights
      </div>

      <div className="fif-grid-wrapper">
        {whyChooseInterp?.map((b) => (
          <div
            className="fif-grid-wrapper-inner p-3 rounded shadow-sm"
            key={b?.id}
            style={{
              background: b?.backgroundColor,
              justifyContent: "space-around",
            }}
          >
            <div className="regular-font font-size5 font-color1 fw-bold">
              {b?.title}
            </div>
            <div className="regular-font font-size6 font-color2 mt-2">
              {b?.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame11;
