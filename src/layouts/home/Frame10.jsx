import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";

const Frame10 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-center px-4">
      <div className="max-w-lg">
        <div className="my-3 dark-font font-size1 font-color1 line-height1">
          Discover the Power Of{" "}
          <span style={{ color: "var(--primary-color)" }}>INTERP</span>
        </div>
        <div className="my-3 regular-font font-size2 font-color2 fw-normal">
          Interpretation Service Request Made Easy as 1,2,3
        </div>

        {/* Uncomment to show download button */}

        {/* Uncomment to show app features */}
        {/* <div className="my-3 regular-font font-size2 font-color2 fw-normal">
          Our Mobile App Provides:
          <ul className="list-disc pl-5 mt-2">
            <li>24/7 Job scheduling</li>
            <li>Real-time access</li>
            <li>Full transparency</li>
            <li>360-degree Ecosystem</li>
            <li>Secure Communication</li>
            <li>Eliminating No Show Fees</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Frame10;
