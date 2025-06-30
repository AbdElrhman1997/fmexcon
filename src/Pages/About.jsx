import React, { useEffect, useState } from "react";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import DontMissBanner from "../Components/DontMissBanner";

const About = () => {
  const { t, i18n } = useTranslation();
  const words_ar = ["تتعرف", "تطلع", "تستفيد"]; // Arabic words
  const words_en = ["Learn", "Discover", "Benefit"]; // English words

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200); // Typing speed in ms

  useEffect(() => {
    const handleTyping = () => {
      const currentWords = i18n.language === "en" ? words_en : words_ar;
      const currentWord = currentWords[currentWordIndex];

      if (!isDeleting) {
        // Typing the word
        setDisplayedWord((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedWord === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting the word
        setDisplayedWord((prev) => prev.slice(0, -1));
        if (displayedWord === "") {
          setIsDeleting(false);
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % currentWords.length
          ); // Move to the next word
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedWord, isDeleting, currentWordIndex, i18n.language, typingSpeed]);

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("about.title")}</title>
      </Helmet>
      <div className="lg:col-span-12 col-span-12 back-ground h-[65vh] ">
        <img
          src="/images/banner_bg.webp"
          className="about-img col-span-12 h-[500px]"
          alt={t("about.aboutImageAlt")}
        />
        <div
          className={`text text-center container mx-auto md:flex justify-between ${
            i18n.language === "en" ? "md:text-left" : "md:text-right"
          }`}
        >
          <h3 className="md:text-[50px] text-[44px] font-bold leading-relaxed">
            {t("about.with_us")}{" "}
            <span className="md:inline block">
              {" "}
              <span className="text-[#35E8EE]">{displayedWord}</span>
              <span className="cursor">|</span>
            </span>
          </h3>
          <a
            href="https://sfma.sa"
            className="md:text-[20px] text-lg font-medium leading-relaxed text-white md:translate-y-16 translate-y-5 md:inline inline-block hover:text-main md:opacity-90"
            target="_blank"
          >
            {t("Powered by SFMA")}
          </a>
        </div>
      </div>

      <div className="col-span-12 container mx-auto md:my-16 my-10">
        <p className="text-3xl font-bold text-text mb-2">
          {t("about.aboutExpo")}
        </p>
        <div className="lg:grid md:grid grid-cols-12 ">
          <div className="md:col-span-8 col-span-12">
            <p className="text-base leading-relaxed text-justify font-semibold">
              {t("about.description")}
            </p>
          </div>
          <div className="md:col-span-4 col-span-12 my-auto md:mt-0 mt-12 h-full flex md:justify-end justify-center items-center">
            <img
              src="/images/Logo-Header.png"
              className="md:h-32 h-28"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 col-span-12 container mx-auto">
        <div className="card text-center p-4">
          <div className="bg-text rounded-2xl py-12">
            <img
              src="/images/about_1.png"
              alt={t("about.card1ImageAlt")}
              className="mx-auto mb-4 w-16 h-16 object-cover"
            />
            <h2 className="text-2xl mb-2 text-white font-bold">
              {t("about.card3Title")}
            </h2>
          </div>

          {/* <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card3Description")}
          </p> */}
        </div>

        <div className="card text-center p-4">
          <div className="bg-text rounded-2xl py-12">
            <img
              src="/images/about_2.png"
              alt={t("about.card2ImageAlt")}
              className="mx-auto mb-4 w-16 h-16 object-cover"
            />
            <h2 className="text-2xl mb-2 text-white font-bold">
              {t("about.card2Title")}
            </h2>
          </div>

          {/* <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card2Description")}
          </p> */}
        </div>

        <div className="card text-center p-4">
          <div className="bg-text rounded-2xl py-12">
            <img
              src="/images/about_3.png"
              alt={t("about.card1ImageAlt")}
              className="mx-auto mb-4 w-16 h-16 object-cover"
            />
            <h2 className="text-2xl mb-2 text-white font-bold">
              {t("about.card1Title")}
            </h2>
          </div>

          {/* <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card1Description")}
          </p> */}
        </div>
      </div>

      <div className="col-span-12 ">
        <DontMissBanner />
      </div>

      <div className="col-span-12">
        <GetNewUpdates />
      </div>
    </section>
  );
};

export default About;
