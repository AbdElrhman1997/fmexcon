import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Helmet } from "react-helmet";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import RegisterModal from "../Components/RegisterModal";
import Sponser from "../Components/Sponser/Sponser";
import ThreeDSection from "../Components/ThreeDSection";
import Organizations from "../Components/Organizations";

const Sponsor = () => {
  const { i18n, t } = useTranslation();
  const [speakers, setSpeakers] = useState([]); // State to track active day
  const [mapData, setMapData] = useState([]); // State to track active day

  const words_ar = ["عزز حضورك", "عزز علامتك التجارية"]; // Arabic words
  const words_en = ["Boost Your Presence", "Strengthen Your Brand"]; // English words

  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [exhibitor, setExhibitor] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200); // Typing speed in ms

  const getSpeakers = async () => {
    await axios
      .get("https://admin.fmexcon.com/api/getAttends")
      .then((res) => {
        setSpeakers(res?.data?.data);
      })
      .catch(() => {});
  };
  const getMapData = async () => {
    await axios
      .get("https://admin.fmexcon.com/api/getMapFile")
      .then((res) => {
        setMapData(res?.data?.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getSpeakers();
    getMapData();
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

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("navbar.sponsors")}</title>
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
            {t("sponsor_1.exhibit_with_us")}{" "}
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
          isSpeaker={speaker && true}
          isExhibitor={exhibitor}
        />

        <div className="lg:grid md:grid grid-cols-12 mt-4 mb-10">
          <div className="col-span-12 my-auto">
            <div className="col-span-12 container mx-auto md:mb-16 md:mt-4">
              <div className="lg:grid md:grid grid-cols-12 ">
                <div className="md:col-span-8 col-span-12">
                  <p className="text-base leading-relaxed text-justify font-semibold">
                    {t("sponsor_1.promotion_text")}
                  </p>
                </div>
                <div className="md:col-span-4 col-span-12 my-auto md:mt-0 mt-12 h-full flex md:justify-center justify-center items-center">
                  <img
                    src="/images/Vector.png"
                    className="md:h-32 h-28"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12">
              <GetNewUpdates />
            </div>

            <section
              className={`co-op my-8 md:py-16 py-8 ${
                i18n.language === "en" ? "text-left" : "text-right"
              }`}
              dir={i18n.language === "en" ? "ltr" : "rtl"}
            >
              <div className="lg:grid md:grid grid-cols-12 gap-6 container mx-auto">
                <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto">
                  <p className="md:text-4xl text-2xl font-bold">
                    {t("sponsor_1.card1_title")}
                  </p>
                  <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                    {t("sponsor_1.card1_text")}
                  </p>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <img
                    src="/images/banner_bg.webp"
                    className="mx-auto md:h-full h-72  my-4"
                    alt="minister_image"
                  />
                </div>
              </div>
            </section>

            <section
              className={`digital-transformation md:mb-24 md:mt-14 ${
                i18n.language === "en" ? "text-left" : "text-right"
              }`}
              dir={i18n.language === "en" ? "ltr" : "rtl"}
            >
              <div className="lg:grid md:grid grid-cols-12 gap-6 container mx-auto">
                <div className="lg:col-span-6 md:col-span-6 col-span-12 md:block hidden">
                  <img
                    src="/images/day2.png"
                    className="mx-auto md:h-full h-72  my-4"
                    alt="minister_image"
                  />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto">
                  <p className="md:text-4xl text-2xl font-bold">
                    {t("sponsor_1.card2_title")}
                  </p>
                  <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                    {t("sponsor_1.card2_text")}
                  </p>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 md:hidden block">
                  <img
                    src="/images/day2.png"
                    className="mx-auto md:h-full h-72  my-4"
                    alt="minister_image"
                  />
                </div>
              </div>
            </section>

            <section
              className={`co-op my-8 md:py-16 py-6 ${
                i18n.language === "en" ? "text-left" : "text-right"
              }`}
              dir={i18n.language === "en" ? "ltr" : "rtl"}
            >
              <div className="lg:grid md:grid grid-cols-12 gap-6 container mx-auto">
                <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto">
                  <p className="md:text-4xl text-2xl font-bold">
                    {t("sponsor_1.card3_title")}
                  </p>
                  <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                    {t("sponsor_1.card3_text")}
                  </p>
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <img
                    src="/images/day3.png"
                    className="mx-auto md:h-full h-72  my-4"
                    alt="minister_image"
                  />
                </div>
              </div>
            </section>

            <div className="col-span-12 mb-12 w-fit mx-auto">
              <button
                className="block btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                style={{
                  padding: "12px 36px",
                  minWidth: "320px",
                  width: "50%",
                }}
                aria-label={t("home.show_with_us")}
                onClick={() => {
                  toggleModal();
                  setExhibitor(true);
                }}
              >
                {t("common.exhibit_now")}
              </button>
            </div>

            <div className="col-span-12 flex flex-wrap gap-4 text-3xl text-white font-bold text-center container mx-auto">
              <div className="bg-main rounded-xl p-7 flex-grow-0 lg:basis-[32.4%] md:basis-1/3 basis-full flex flex-col items-center justify-center  min-h-[180px]">
                <div className="text-6xl">+120</div>
                <div className="text-2xl mt-2">{t("common.workshops")}</div>
              </div>
              <div className="bg-main rounded-xl p-7 flex-grow-0 lg:basis-[32.4%] md:basis-1/3 basis-full flex flex-col items-center justify-center  min-h-[180px]">
                <div className="text-6xl">+200</div>
                <div className="text-2xl mt-2">{t("common.speakers")}</div>
              </div>
              <div className="bg-main rounded-xl p-7 flex-grow-0 lg:basis-[32.4%] md:basis-1/3 basis-full flex flex-col items-center justify-center  min-h-[180px]">
                <div className="text-6xl">+210</div>
                <div className="text-2xl mt-2">
                  {t("common.participating_entities")}
                </div>
              </div>
            </div>

            <div className="col-span-12 my-auto md:mt-16 mt-10 container mx-auto">
              <p className="text-text font-bold mb-1 mt-10 text-center md:text-4xl text-3xl">
                {t("sponsor_1.why_sponsor_title")}
              </p>
              <p className="text-text font-semibold mb-1 mt-1 text-center md:text-2xl text-xl">
                {t("sponsor_1.why_sponsor_text")}
              </p>
              <section
                className={`co-op my-8 ${
                  i18n.language === "en" ? "text-left" : "text-right"
                }`}
                dir={i18n.language === "en" ? "ltr" : "rtl"}
              >
                <div className="lg:grid md:grid grid-cols-12 gap-6 ">
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 p-6 my-auto">
                    <p className="md:text-4xl text-2xl font-bold">
                      {t("sponsor_1.location")}
                    </p>
                    <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                      {t("sponsor_1.location_text")}
                    </p>
                  </div>
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 relative">
                    {/* Image */}
                    <img
                      src="/images/conferance_section.webp"
                      className="mx-auto md:h-80 md:my-0 my-4 w-full object-cover"
                      alt="minister_image"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ backgroundColor: "rgba(40, 164, 168, 0.65)" }}
                    ></div>
                  </div>
                </div>
              </section>

              <section
                className={`co-op my-8  ${
                  i18n.language === "en" ? "text-left" : "text-right"
                }`}
                dir={i18n.language === "en" ? "ltr" : "rtl"}
              >
                <div className="lg:grid md:grid grid-cols-12 gap-6 ">
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 relative md:block hidden ">
                    {/* Image */}
                    <img
                      src="/images/main_page_3.jpg"
                      className="mx-auto md:h-80 md:my-0 my-4 w-full object-cover"
                      alt="minister_image"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ backgroundColor: "rgba(40, 164, 168, 0.65)" }}
                    ></div>
                  </div>
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 p-6 my-auto">
                    <p className="md:text-4xl text-2xl font-bold">
                      {t("sponsor_1.target_audience")}
                    </p>
                    <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                      {t("sponsor_1.target_audience_text")}
                    </p>
                  </div>
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 relative md:hidden block">
                    {/* Image */}
                    <img
                      src="/images/main_page_3.jpg"
                      className="mx-auto md:h-80 h-[195px] md:my-0 my-4 w-full object-cover"
                      alt="minister_image"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ backgroundColor: "rgba(40, 164, 168, 0.65)" }}
                    ></div>
                  </div>
                </div>
              </section>

              <section
                className={`co-op my-8 ${
                  i18n.language === "en" ? "text-left" : "text-right"
                }`}
                dir={i18n.language === "en" ? "ltr" : "rtl"}
              >
                <div className="lg:grid md:grid grid-cols-12 gap-6 ">
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 p-6 my-auto">
                    <p className="md:text-4xl text-2xl font-bold">
                      {t("sponsor_1.participants")}
                    </p>
                    <p className="text-justify md:text-[18px] text-base mt-2 leading-loose">
                      {t("sponsor_1.participants_text")}
                    </p>
                  </div>
                  <div className="lg:col-span-6 md:col-span-6 col-span-12 relative">
                    {/* Image */}
                    <img
                      src="/images/Rectangle 25.png"
                      className="mx-auto md:h-80 md:my-0 my-4 w-full object-cover"
                      alt="minister_image"
                    />
                  </div>
                </div>
              </section>
            </div>

            <Organizations />

            <div className="px-4">
              <p className="text-text font-bold mb-1 mt-10 text-center md:text-4xl text-3xl leading-snug">
                {t("sponsor_1.dont_miss_event")}
              </p>
              <p className="text-text font-semibold mb-1 mt-1 text-center text-2xl">
                {t("sponsor_1.boost_presence_slogan")}
              </p>
              <div className="flex justify-center md:gap-x-8 gap-x-4 my-8">
                <button
                  className="btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
                  style={{ padding: "12px 36px" }}
                  aria-label={t("home.show_with_us")}
                  onClick={() => {
                    toggleModal();
                    setExhibitor(false);
                    setSpeaker(false);
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
                    setSpeaker(false);
                    setExhibitor(true);
                  }}
                >
                  {t("registerWithUs.view")}
                </button>
              </div>
            </div>

            <div className="col-span-12 container mx-auto">
              <img
                src={`https://admin.fmexcon.com/public/storage/images/${mapData?.image}`}
                alt={t("sponsor_1.map_image_alt")}
                className="md:w-2/3 w-full mx-auto my-6"
              />
              <a
                href={`https://admin.fmexcon.com/public/storage/images/${mapData?.pdf}`} // Update this to the correct file path
                download="SFMA EXPO - FLOOR 25.pdf" // Update the file name for download
                target="_blank"
                className="block text-center px-8 py-2 bg-text hover:bg-text_hover rounded-xl w-fit mx-auto mt-6 text-white cursor-pointer"
              >
                {t("sponsor_1.download_map")}
              </a>
            </div>

            <div className="col-span-12 container mx-auto">
              <ThreeDSection />
            </div>

            <div className="relative text-white" style={{ zIndex: "-10" }}>
              <div
                className=" w-full justify-center gap-x-12 text-6xl font-bold mt-8 mb-12 text-center bg-[#28A4A8A6] md:py-3 py-[16px]"
                dir="ltr"
              >
                <div className="md:font-bold md:text-[33px] text-[27px] text-white md:py-5 py-2 -z-10">
                  {t("common.know_sponsors")}
                </div>
              </div>
            </div>

            <div className="col-span-12 container mx-auto">
              <Sponser />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-span-12 w-fit mx-auto mb-10">
        <button
          className="block mt-4 btn-why-sponsor h-fit w-fit py-[9px]  font-bold hover:bg-white hover:text-text  cursor-pointer"
          style={{ padding: "12px 36px", minWidth: "320px", width: "50%" }}
          aria-label={t("common.exhibit_now")}
          onClick={() => {
            toggleModal();
            setRegister(false);
            setSpeaker(false);
            setExhibitor(true);
          }}
        >
          {t("common.exhibit_now")}
        </button>
      </div> */}
    </section>
  );
};

export default Sponsor;
