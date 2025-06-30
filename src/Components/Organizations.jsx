import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel/Carousel.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Organizations = () => {
  const swiper = useSwiper();
  const { t } = useTranslation();
  const [sponsers, setSponsers] = useState([]);

  const getSponsors = async (type) => {
    try {
      const res = await axios.get(
        `https://admin.fmexcon.com/api/getNewSponsorApi`
      );
      setSponsers(res?.data?.data);
      console.log(sponsers);
    } catch (error) {
      console.error(`Error fetching sponsors for type ${type}:`, error);
    }
  };

  useEffect(() => {
    getSponsors();
  }, []);

  return (
    <section className="category container lg:mb-12 mb-6" dir="rtl">
      <p
        className={`text-text font-bold  lg:mt-10 mt-4 text-center md:text-4xl text-3xl mb-8 leading-10`}
      >
        {t("sponsors.organizations")}
      </p>
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
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
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
        {sponsers
          ?.filter((sponser) => sponser?.type === 9)
          ?.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="category-img">
                <a
                  href={slide.url || "#"}
                  className="card-link text-xl hover:opacity-90 text-text"
                  dir="rtl"
                  target="_blank"
                >
                  <img
                    src={`https://admin.fmexcon.com/public/images/${slide?.image}`}
                    className="swiper-img md:w-36 w-32 mx-auto"
                    alt={`image ${slide?.name}`}
                  />
                </a>
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

export default Organizations;
