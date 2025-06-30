import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel.css";

const Carousel = ({ sponsers }) => {
  const swiper = useSwiper();

  return (
    <section className="category container" dir="rtl">
      {/* <Swiper
        // install Swiper modules
        className="Swiper text-center"
        modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 540,
            slidesPerView: 1,
          },
          // when window width is >= 768px

          768: {
            width: 768,
            slidesPerView: 2,
          },

          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        spaceBetween={40}
        keyboard={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={false}
        speed={200}
        navigation={true}
        // onMouseEnter={() => {
        //   this.scrollbar.hide = false;
        // }}
      >
        <button onClick={() => swiper.slidePrev()}></button>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <CarouselItem
              imgSrc={slide.imgSrc}
              name={slide.name}
              count={slide.count}
            />
          </SwiperSlide>
        ))}
        <button onClick={() => swiper.slideNext()}></button>
      </Swiper> */}
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
        {sponsers?.map((slide, i) => (
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
                  className="swiper-img md:w-40 w-32 mx-auto"
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

export default Carousel;
