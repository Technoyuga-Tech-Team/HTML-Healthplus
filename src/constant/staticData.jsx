import {
  LANDING_PAGE_IMAGES,
  LANDING_PAGE_VECTOR_ICON,
  REGISTER_PAGE_IMAGES,
} from "./images";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { HiUser } from "react-icons/hi";
import { BsWechat } from "react-icons/bs";

export const imagesForGrid = [
  {
    id: 1,
    name: LANDING_PAGE_IMAGES["1"],
  },
  {
    id: 2,
    name: LANDING_PAGE_IMAGES["2"],
  },
  {
    id: 3,
    name: LANDING_PAGE_IMAGES["3"],
  },
  {
    id: 4,
    name: LANDING_PAGE_IMAGES["4"],
  },
];

export const secondFrameConstants = [
  {
    id: 1,
    number: "1,000+",
    text: "Lives Transformed",
  },
  {
    id: 2,
    number: "95%",
    text: "Client Satisfaction",
  },
  {
    id: 3,
    number: "1,200+",
    text: "Innovative Solutions Delivered",
  },
];

export const bookAppointmentConstants = [
  {
    id: 1,
    title: "Get tailored advice for your health startup or project.",
    backgroundColor: "rgba(244, 244, 244, 1)",
    image: LANDING_PAGE_IMAGES[7],
  },
  {
    id: 2,
    title: "Discuss funding, marketing, or product development strategies.",
    backgroundColor: "rgba(191, 215, 208, 1)",
    image: LANDING_PAGE_IMAGES[8],
  },
  {
    id: 3,
    title: "Receive personalized feedback from experienced professionals.",
    backgroundColor: "rgba(255, 229, 213, 1)",
    image: LANDING_PAGE_IMAGES[9],
  },
];

export const howItWorksConstants = [
  {
    id: 1,
    title: "Choose Your Expert",
    desc: "Explore our curated list of experienced mentors, advisors, and consultants specializing in health entrepreneurship",
    image: LANDING_PAGE_VECTOR_ICON[1],
  },
  {
    id: 2,
    title: "Pick a Time",
    desc: "Select a time slot that works best for you using our user-friendly scheduling system.",
    image: LANDING_PAGE_VECTOR_ICON[2],
  },
  {
    id: 3,
    title: "Connect",
    desc: "Designed with your comfort in mind, our serene atmosphere promotes relaxation and emotional safety from the moment you walk in.",
    image: LANDING_PAGE_VECTOR_ICON[3],
  },
];

export const extraSeventhFrameConst = [
  {
    id: 1,
    title: "Startup Accelerator",
    desc: "Fast-track your health startup with our intensive program designed to refine your business model, attract investors, and launch successfully.",
    image: LANDING_PAGE_VECTOR_ICON[4],
  },
  {
    id: 2,
    title: "Funding Opportunities",
    desc: "Gain access to exclusive grants, venture capital, and partnerships tailored for health entrepreneurs.",
    image: LANDING_PAGE_VECTOR_ICON[5],
  },
  {
    id: 3,
    title: "Mentorship Network",
    desc: "Work with industry experts and seasoned entrepreneurs to navigate challenges and scale your innovations.",
    image: LANDING_PAGE_VECTOR_ICON[6],
  },
];

export const faqConstants = [
  {
    id: 1,
    title: "Emergency Departments",
    desc: "",
  },
  {
    id: 2,
    title: "COVID-19 Testing Clinics",
    desc: "",
  },
  {
    id: 3,
    title: "GP (General practice)",
    desc: "",
  },
];

export const footerConst1 = [
  {
    title: "Company",
    data: [
      {
        id: 1,
        text: "About Us",
        refConst: "aboutUsRef",
      },
      {
        id: 2,
        text: "FAQs",
        refConst: "faqRef",
        nav: "",
      },
      {
        id: 3,
        text: "Contact Us",
        nav: "/contact-us",
      },
    ],
  },
  {
    title: "Get Support",
    data: [
      {
        id: 1,
        text: "How it works",
        nav: "",
        refConst: "howItWorksRef",
      },
      {
        id: 2,
        text: "Testimonials",
        nav: "",
        refConst: "testimonialRef",
      },
      {
        id: 3,
        text: "Blog Post",
        nav: "",
      },
    ],
  },
  // {
  //     title: "Stay Update",
  //     data: ["Email Alert", "New Offer", "Wellness Tips", "Event Update"]
  // }
];

export const socialMediaConstants = [
  {
    id: 1,
    img: <SlSocialFacebook size={22} />,
  },
  {
    id: 2,
    img: <IoLogoInstagram size={22} />,
  },
  {
    id: 3,
    img: <FiYoutube size={22} />,
  },
  {
    id: 4,
    img: <SlSocialLinkedin size={22} />,
  },
];

export const HOME_HEADER_CONST_DATA = [
  {
    id: 1,
    name: "Home",
    nav: "/",
    refConst: "homeRef",
  },
  {
    id: 2,
    name: "About Us",
    refConst: "aboutUsRef",
    // nav: routeConst.findProject
  },
  {
    id: 3,
    name: "How it works",
    // nav: routeConst.faq
    refConst: "howItWorksRef",
  },
  {
    id: 4,
    name: "Contact Us",
    nav: "/contact-us",
  },
];

export const registerPageConstant = [
  {
    id: 1,
    image: REGISTER_PAGE_IMAGES[1],
    text: "Transformed",
  },
  {
    id: 2,
    image: REGISTER_PAGE_IMAGES[2],
    text: "Client Satisfaction",
  },
  {
    id: 3,
    image: REGISTER_PAGE_IMAGES[3],
    text: "Solutions",
  },
  {
    id: 4,
    image: REGISTER_PAGE_IMAGES[4],
    text: "Appointments",
  },
];

export const tabBarOptions = [
  {
    id: 1,
    icon: <HiUser size={22} />,
    title: "Customer",
    desc: "Manage your appointments and communicate with your interpreters",
    isCustomer: true,
  },
  {
    id: 2,
    icon: <BsWechat size={22} />,
    title: "Interpreter",
    desc: "Connect with users to bridge language barriers during consultations.",
    isCustomer: false,
  },
];

export const TESTIMONIAL_CONST = [
  {
    desc: "I’ve been using INTERP for months now and it has completely transformed the way we schedule interpreters. The real-time insights are invaluable.",
    name: "John Smith",
    rate: 4,
  },
  {
    desc: "“INTERP has been a game-changer for our business. The personalized experience and fast results have saved us time and money.”",
    name: "Emily Johnson",
    rate: 5,
  },
  {
    desc: "“I can’t imagine scheduling interpreters without INTERP. The platform is easy to use and provides the insights I need to make informed decisions.”",
    name: "David Lee",
    rate: 4,
  },
];

export const whyChooseInterp = [
  {
    id: 1,
    title: "Fast and Accurate",
    desc: "Our platform provides real-time insights on interpreter data, giving you the information you need when you need it. Our technology ensures fast and accurate results every time",
    backgroundColor: "rgba(244, 244, 244, 1)",
    image: LANDING_PAGE_IMAGES[7],
  },
  {
    id: 2,
    title: "24/7 Support",
    desc: "We understand the importance of having support when you need it. That's why our team is available 24/7 to answer.",
    backgroundColor: "rgba(191, 215, 208, 1)",
    image: LANDING_PAGE_IMAGES[8],
  },
  {
    id: 3,
    title: "Secure and Reliable",
    desc: "Secure and Reliable Your data is important to us. That's why we use the latest ",
    backgroundColor: "rgba(255, 229, 213, 1)",
    image: LANDING_PAGE_IMAGES[9],
  },
];
