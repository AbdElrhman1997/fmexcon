import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Speakers_Carousel.css";
import { useTranslation } from "react-i18next";

const Speakers_Carousel = ({ sponsers }) => {
  const swiper = useSwiper();
  const { t, i18n } = useTranslation();

  return (
    <section className="category container w-full">
      <Swiper
        spaceBetween={50}
        keyboard={true}
        mousewheel={true}
        className="Swiper"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        speed={1200}
        autoplay={{
          delay: 1500, // Delay between transitions
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
      >
        <button
          onClick={() => swiper.slideNext()}
          className="swiper-button-prev"
        ></button>
        {sponsers?.map((slide, i) => (
          <SwiperSlide key={i} className="pt-24">
            <div className="bg-white shadow-lg rounded-lg py-6 lg:px-1 my-8 box col-span-12 lg:w-96 w-80 mx-auto">
              <div className="relative">
                <img
                  className="speaker-img"
                  src={`https://admin.fmexcon.com/public/images/${slide?.image}`}
                  alt="SpeakerImage"
                />
              </div>
              <div className="my-2 text-center">
                <h3 className="text-xl font-bold mb-2 text-[#44add2]">
                  {i18n.language == "en" ? slide?.name_en : slide?.name_ar}
                </h3>
                <p className="text-gray-800 px-2 font-semibold">
                  {i18n.language == "en"
                    ? slide?.description_en
                    : slide?.description_ar}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next-container">
          <button
            onClick={() => swiper.slidePrev()}
            className="swiper-button-next"
          ></button>
        </div>
      </Swiper>
    </section>
  );
};

export default Speakers_Carousel;
