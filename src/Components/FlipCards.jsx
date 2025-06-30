import React from "react";
import { useTranslation } from "react-i18next";

const FlipCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("creativity.title"),
      details: t("creativity.description"),
      image: "/images/flip_cards_3.jpg",
    },
    {
      title: t("digitalTransformation.title"),
      details: t("digitalTransformation.description"),
      image: "/images/flip_cards_2.jpg",
    },
    {
      title: t("coOperation.title"),
      details: t("coOperation.description"),
      image: "/images/flip_cards_1.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-12 my-12 container mx-auto md:gap-12 gap-y-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flip-card relative cursor-pointer w-full h-80 lg:col-span-4 md:col-span-6 col-span-12"
        >
          <div className="flip-card-inner">
            <div className="bg-[#013047C7] absolute w-full h-full top-0 left-0 z-10"></div>
            <div
              className="flip-card-front"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="z-20">
                <p className="text-3xl font-bold my-2">{card.title}</p>
                <button className="bg-[#35E8EE] text-text px-3 py-2 rounded-lg mt-4">
                  {t("common.read_more")}
                </button>
              </div>
            </div>
            <div className="flip-card-back z-50 bg-text">
              <p>{card.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
