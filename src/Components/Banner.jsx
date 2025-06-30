import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const useScrollAnimation = () => {
    useEffect(() => {
      const fadeSection = document.querySelector(".fade-section");
      const leftHand = document.querySelector(".fade-left");
      const rightHand = document.querySelector(".fade-right");

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            leftHand.classList.add("animate");
            rightHand.classList.add("animate");
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Trigger when 50% of the section is visible
      });

      if (fadeSection) observer.observe(fadeSection);

      return () => observer.disconnect();
    }, []);
  };

  useScrollAnimation();

  return (
    <section className="relative md:h-[70vh] h-[25vh] fade-section" dir="rtl">
      <img
        src="/images/Rectangle-10.jpg"
        alt="Rectangle 10.png"
        className="relative h-full w-full"
      />
      <div className="absolute right-0 top-1/2 -translate-y-[50%] flex justify-between items-center w-full h-[80vh]">
        <img
          src="/images/banner_hand.webp"
          alt="banner_hand.png"
          className="md:h-60 h-[66px] fade-left"
        />
        <div className="md:min-w-[300px] min-w-[130px]">
          <div className="font-bold md:text-[40px] text-xl text-white">
            {t("common.under_theme")}
          </div>
          <div className="md:text-[40px] text-xl text-white md:mt-10 mt-2">
            {t("common.facility_intelligence")}
          </div>
        </div>
        <img
          src="/images/reversed.webp"
          alt="banner_hand.png"
          className="md:h-60 h-[66px] fade-right"
        />
      </div>
    </section>
  );
};

export default Banner;
