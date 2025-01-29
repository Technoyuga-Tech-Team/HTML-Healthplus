import React, { useRef } from "react";
import Slider from "react-slick";
import { LANDING_PAGE_IMAGES } from "@/constant/images";
import StarComponant from "../ButtonComp/starComponant";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const TestimonialSlider = ({ data }) => {
    const sliderRef = useRef(null);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {data?.map((tes, index) => {
                    return (
                        <div key={index} className='d-flex ninef-main-wrapper'>
                            <div className='ninef-main-wrapper-left my-2' style={{paddingLeft:"2px"}}>
                                <img src={LANDING_PAGE_IMAGES[13]} />
                            </div>
                            <div className='ninef-main-wrapper-right'>
                                <div>
                                    <StarComponant
                                        value={tes?.rate}
                                        size={32}
                                        edit={false} />
                                </div>
                                <div className='regular-font font-size5 font-color2 fw-normal'>
                                    {tes?.desc}
                                </div>
                                <div className='my-4'>
                                    <div className='regular-font font-size3 font-color1 fw-normal'>{tes?.name}</div>
                                    <div className='regular-font font-size3 font-color1 fw-normal' style={{ fontSize: "14px" }}>Client</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="d-flex justify-content-end">
                <div
                    className="arraow-background"
                    style={{ marginRight: "15px" }}
                    onClick={handlePrevSlide}
                >
                    <div style={{ marginTop: "-2px" }}>
                        <GoArrowLeft />
                    </div>
                </div>
                <div className="arraow-background" onClick={handleNextSlide}>
                    <div style={{ marginTop: "-2px" }}>
                        <GoArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;