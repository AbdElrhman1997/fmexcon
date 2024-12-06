import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./EventDetails.css";
import { useTranslation } from "react-i18next";

const EventDetails = ({ sponsers }) => {
  const { i18n, t } = useTranslation();

  const eventDetails = [
    { title: t("eventDetails.participationEntity"), count: "207+" },
    { title: t("eventDetails.workshop"), count: "65+" },
    { title: t("eventDetails.speakers"), count: "50+" },
    { title: t("eventDetails.participationEntity"), count: "207+" },
    { title: t("eventDetails.workshop"), count: "65+" },
    { title: t("eventDetails.speakers"), count: "50+" },
  ];

  return (
    <section className="category container">
      <Swiper
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
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        speed={1500}
        autoplay={{
          delay: 2000, // Delay between transitions
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
      >
        {eventDetails.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              color:
                item?.count == "207+"
                  ? "#4aa6d3"
                  : item?.count == "65+"
                  ? "#319694"
                  : item?.count == "50+"
                  ? "#808080"
                  : "",
              textAlign: "center",
            }}
          >
            <div className="text-7xl font-semibold">{item?.count}</div>
            <div className="text-xl mt-3 tracking-wide">{item?.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EventDetails;
