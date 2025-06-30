import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DigitalTransformation from "../Components/DigitalTransformation/DigitalTransformation";
import CoOperation from "../Components/CoOperation/CoOperation";
import ImageSlider from "../Components/ImageSlider";
import RegisterModal from "../Components/RegisterModal";

const Conferance = () => {
  const { i18n, t } = useTranslation();
  const [activeDay, setActiveDay] = useState(1); // State to track active day
  const [speakers, setSpeakers] = useState([]); // State to track active day

  const words_ar = ["رؤية", "تفاعل", "تطوير"]; // Arabic words
  const words_en = ["Vision", "Interaction", "Development"]; // English words

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200); // Typing speed in ms

  // const handleDayClick = (day) => {
  //   setActiveDay(day); // Set active day based on clicked button
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const getSpeakers = async () => {
    await axios
      .get("https://admin.fmexcon.com/api/getAttends")
      .then((res) => {
        setSpeakers(res?.data?.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getSpeakers();
  }, []);

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

  const topics = [
    "conference.topic1",
    "conference.topic2",
    "conference.topic3",
    "conference.topic4",
    "conference.topic5",
    "conference.topic6",
    "conference.topic7",
  ];

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("conference.title")}</title>
      </Helmet>

      <div className="lg:col-span-12 col-span-12 back-ground h-[65vh]  ">
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
            {t("conference.title")}{" "}
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

      <div className="col-span-12">
        <RegisterModal
          toggleModal={toggleModal}
          isOpen={isOpen}
          isVisitor={register && true}
          isSpeaker={!register && true}
        />
        <div className="lg:grid md:grid grid-cols-12 mt-4 mb-10">
          <div className="col-span-12 my-auto">
            <div className="col-span-12 container mx-auto md:mb-16 md:mt-4">
              <p className="text-3xl font-bold text-text mb-2">
                {t("conference.description_title")}
              </p>
              <div className="lg:grid md:grid grid-cols-12 ">
                <div className="md:col-span-8 col-span-12">
                  <p className="text-base leading-relaxed text-justify font-semibold">
                    {t("conference.description_text")}
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
              <div className="mt-12 mb-4">
                <ImageSlider />
              </div>
            </div>

            <div className="flex justify-center md:gap-x-8 gap-x-4">
              <button
                className="btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                style={{ padding: "12px 36px" }}
                aria-label={t("home.show_with_us")}
                onClick={() => {
                  toggleModal();
                  setRegister(true);
                }}
              >
                {t("conference.register")}
              </button>
              <button
                className="btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                style={{ padding: "12px 36px" }}
                aria-label={t("home.show_with_us")}
                onClick={() => {
                  toggleModal();
                  setRegister(false);
                  setSpeaker(true);
                }}
              >
                {t("conference.speaker_register")}
              </button>
            </div>
            <section className="relative flex flex-col justify-center homeSec mt-14 mb-14">
              {/* Background Video */}
              <img
                src="/images/conference _theme.png"
                alt="date & location"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Light Blue Overlay */}
              <div className="absolute top-0 left-0 w-full h-full opacity-90"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <div
                  className=" w-full justify-center gap-x-12 text-6xl font-bold mt-8 mb-12 text-center bg-[#28A4A8A6] py-6 border-t-4 border-b-4"
                  dir="ltr"
                >
                  <div className="font-bold text-4xl text-white">
                    {t("common.under_theme")}
                  </div>
                  <div className="text-4xl text-white mt-3">
                    {t("common.facility_intelligence")}
                  </div>
                </div>
              </div>
              <img
                src="/images/date & location.png"
                alt="date & location"
                className="absolute md:h-28  px-4 left-1/2 bottom-0 translate-y-[50%] -translate-x-[50%] z-12"
              />
            </section>
          </div>
        </div>
      </div>

      <div className="col-span-12 container mx-auto">
        <section
          className={`md:my-8 ${
            i18n.language === "en" ? "text-left" : "text-right"
          }`}
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className={`lg:grid md:grid grid-cols-12`}>
            <div className="md:col-span-6 col-span-12 md:text-justify text-center flex flex-col justify-center items-start md:w-10/12 w-full">
              <p className="text-4xl font-bold text-text w-full mb-2">
                {t("conference.participation_reason_title")}
              </p>
              <p className="text-lg md:leading-loose leading-10 mt-2 mb-6 ">
                {t("conference.participation_reason_text")}
              </p>
              <div className="flex justify-start lg:-translate-x-0 md:-translate-x-0 mx-auto">
                <button
                  className="btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                  style={{ padding: "12px 36px" }}
                  aria-label={t("home.show_with_us")}
                  onClick={() => {
                    toggleModal();
                    setRegister(true);
                  }}
                >
                  {t("conference.register")}
                </button>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 mx-2 md:my-0 my-10">
              <img
                src="/images/Reason_Participation.png"
                alt="date & location"
                className="z-12"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="lg:grid md:grid grid-cols-12 col-span-12">
        <div className="col-span-12 my-auto bg-[#EEEEEE] py-4">
          <p className="text-text font-bold mb-1 mt-6 text-center text-4xl leading-normal">
            {t("conference.topics_title")}
          </p>
          <div className="flex flex-wrap gap-4 my-12 container mx-auto justify-center">
            {topics.map((topic, index) => (
              <p
                key={index}
                className="flex-grow-0 lg:basis-[24%] md:basis-1/3 basis-full text-xl font-semibold bg-text text-white text-center py-12 px-3 rounded-2xl h-[170px] max-h-[200px] flex items-center justify-center leading-relaxed"
              >
                {t(topic)}
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-12 my-auto container mx-auto">
          {/* Title */}
          <p className="text-text font-bold mb-1 mt-10 text-center text-4xl">
            {t("conference.commitment_title")}
          </p>
          <p className="text-text font-semibold mb-1 mt-1 text-center text-2xl">
            {t("conference.commitment_sub_title")}
          </p>

          {/* Dynamic Cards */}
          <div className="flex flex-wrap gap-4 justify-center my-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex-grow-0 lg:basis-[32.4%] md:basis-1/2 basis-full text-2xl font-semibold bg-[#EEEEEE] text-text rounded-2xl flex flex-col leading-10 p-4"
              >
                {/* Image */}
                <img
                  src={`/images/goals_${index + 1}.jpg`}
                  className="about-img col-span-12 rounded-2xl mb-4"
                  alt={t("about.aboutImageAlt")}
                />

                {/* Title */}
                <span className="font-bold text-xl">
                  {t(`conference.commitment_text_${index + 1}_title`)}
                </span>

                {/* Description */}
                <span className="text-base mt-2 flex-grow h-[100px] overflow-hidden">
                  {t(`conference.commitment_text_${index + 1}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12">
          <CoOperation from_conferance={true} />
          <DigitalTransformation from_conferance={true} />
          <section className="relative flex flex-col justify-center mb-6 py-16 mt-8">
            {/* Background Image */}
            <img
              src="/images/conferance_section.webp"
              alt="date & location"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Color Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ backgroundColor: "rgba(1, 48, 71, 0.9)" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-white container mx-auto">
              <div
                className="w-full justify-center gap-x-12 text-6xl font-bold text-center py-6"
                dir="ltr"
              >
                <div className="font-bold text-4xl text-white">
                  {t("conference.join_us_title")}
                </div>
                <div className="text-xl text-white mt-5 font-semibold mx-auto leading-loose">
                  {t("conference.join_us")}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="col-span-12 mb-12 mx-auto">
        <button
          className="block btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
          style={{ padding: "12px 36px", minWidth: "320px", width: "50%" }}
          aria-label={t("home.show_with_us")}
          onClick={() => {
            toggleModal();
            setRegister(true);
          }}
        >
          {t("conference.register")}
        </button>
        <button
          className="block mt-4 btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
          style={{ padding: "12px 36px", minWidth: "320px", width: "50%" }}
          aria-label={t("home.show_with_us")}
          onClick={() => {
            toggleModal();
            setRegister(false);
            setSpeaker(true);
          }}
        >
          {t("conference.speaker_register")}
        </button>
      </div>
    </section>
  );
};

export default Conferance;
