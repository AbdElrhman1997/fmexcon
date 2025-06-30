import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RegisterModal from "../Components/RegisterModal";
const HomeSection = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const targetDate = new Date("2025-08-24T09:00:00");

  // State to store the countdown values
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date();

      // Calculate the difference in milliseconds
      const difference = targetDate - now;

      // If the countdown is finished, clear the interval
      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        // Calculate the time left
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update the countdown state
        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const langPrefix = i18n.language === "en" ? "/en" : "/ar";

  return (
    <section className="relative flex flex-col justify-center homeSec">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://admin.fmexcon.com/public/images/v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light Blue Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#013047E5] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-white md:mb-6 mb-12">
        <RegisterModal
          toggleModal={toggleModal}
          isOpen={isOpen}
          isVisitor={register && true}
          isExhibitor={!register && true}
        />
        <div>
          <div className="md:text-[40px] text-4xl font-bold md:pt-0 pt-12 leading-relaxed md:px-0 px-8">
            {t("common.title")}
            <span className="md:m-4 m-2 md:inline block">SFMA EXPO 2025</span>
          </div>
          <div
            className="flex w-full justify-center md:gap-x-16 gap-x-10 md:text-[40px] text-4xl font-bold mt-8 mb-12 text-center"
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <div>
              <div>{countdown?.days}</div>
              <div className="text-main md:text-3xl text-2xl">
                {t("common.days")}
              </div>
            </div>{" "}
            <div>
              <div>{countdown?.hours}</div>
              <div className="text-main md:text-3xl text-2xl">
                {" "}
                {t("common.hour")}
              </div>
            </div>{" "}
            <div>
              <div>{countdown?.minutes}</div>
              <div className="text-main md:text-3xl text-2xl">
                {" "}
                {t("common.minutes")}
              </div>
            </div>{" "}
          </div>
        </div>
        <div className=" flex sm:flex-row justify-center items-center bottom-8 left-0 right-0 mx-auto w-full px-4 max-w-2xl xl:gap-x-20 lg:gap-x-20 md:gap-x-20 gap-x-4">
          <button
            className="btn-view-home h-fit w-fit md:px-8 px-4 py-2 font-bold hover:bg-text hover:text-white cursor-pointer md:min-w-[250px] min-w-[45%]"
            aria-label={t("home.show_with_us")}
          >
            <Link className="" to={`${langPrefix}/register`}>
              {t("home.register_with_us")}
            </Link>
          </button>
          <button
            className="btn-view-home h-fit w-fit md:px-8 px-4 py-2 font-bold hover:bg-text hover:text-white cursor-pointer md:min-w-[250px] min-w-[45%]"
            aria-label={t("home.show_with_us")}
          >
            <Link className="" to={`${langPrefix}/sponsores`}>
              {t("home.show_with_us")}
            </Link>
          </button>
        </div>
      </div>
      <img
        src="/images/date & location.png"
        alt="date & location"
        className="absolute md:h-28 px-4 left-1/2 bottom-0 translate-y-[50%] -translate-x-[50%] z-12"
      />
    </section>
  );
};

export default HomeSection;
