import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import {
  FaClock,
  FaEye,
  FaGlobe,
  FaCheckCircle,
  FaShieldAlt,
  FaTimesCircle,
} from "react-icons/fa";
const Frame12 = () => {
  const features = [
    {
      text: "24/7 Job scheduling",
      icon: <FaClock color="#3b82f6" size={20} />,
      backgroundColor: "rgba(244, 244, 244, 1)",
    },
    {
      text: "Real-time access",
      icon: <FaEye color="#22c55e" size={20} />,
      backgroundColor: "rgba(191, 215, 208, 1)",
    },
    {
      text: "Full transparency",
      icon: <FaGlobe color="#a855f7" size={20} />,
      backgroundColor: "rgba(255, 229, 213, 1)",
    },
    {
      text: "360-degree Ecosystem",
      icon: <FaCheckCircle color="#f97316" size={20} />,
      backgroundColor: "rgb(214, 255, 213)",
    },
    {
      text: "Secure Communication",
      icon: <FaShieldAlt color="#ef4444" size={20} />,
      backgroundColor: "rgb(213, 240, 255)",
    },
    {
      text: "Eliminating No Show Fees",
      icon: <FaTimesCircle color="#64748b" size={20} />,
      backgroundColor: "rgb(219, 213, 255)",
    },
  ];
  return (
    <div className="container">
      <div className="ff-main-wrapper">
        <div className="">
          {/* <div className="my-3">
            <button
              className=" px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white hover:bg-gray-100"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaApple className="text-black text-lg" />
              <span className="mx-2 text-gray-800 font-medium">|</span>
              <FcGoogle className="text-lg" />
              <span
                className="ml-2 text-gray-800 font-medium "
                style={{ marginLeft: "10px" }}
              >
                Download app
              </span>
            </button>
          </div> */}
          <div
            className="mb-3 regular-font font-size4 font-color1 line-height1"
            style={{ fontWeight: 500 }}
          >
            Our Mobile App Provides:
          </div>

          {features?.map((b, index) => (
            <div
              className="fif-grid-wrapper-inner p-3 rounded shadow-sm mb-2 max-w-max"
              key={b?.id}
              style={{
                background: b?.backgroundColor,
              }}
            >
              <div className="regular-font font-size6 font-color1 fw-bold flex items-center gap-3">
                {b?.icon}
                <span style={{ marginLeft: "10px" }}>{b?.text}</span>
              </div>
            </div>
          ))}

          {/* <div className="my-3 regular-font font-size2 font-color2 fw-normal">
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
        <div className="ff-main-wrapper-right">
          <div className="ff-grid-wrapper">{/* Grid Images Placeholder */}</div>
        </div>
      </div>
    </div>
  );
};

export default Frame12;
