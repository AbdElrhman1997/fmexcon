import React from "react";
import aboutImage from "../Images/aboutImage.png";
import about_image1 from "../Images/about-image1.png";
import about_image2 from "../Images/about-image2.png";
import about_image3 from "../Images/about-image3.png";
import GetNewUpdates from "../Components/GetNewUpdates/GetNewUpdates";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import RegisterWithUsImage from "../Images/RegisterWithUs.png";
import { Link } from "react-router-dom";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("about.title")}</title>
      </Helmet>
      <div className="lg:col-span-12 col-span-12 back-ground text-center">
        <img
          src={aboutImage}
          className="about-img col-span-12"
          alt={t("about.aboutImageAlt")}
        />
        <div className="text">
          <h3>{t("about.title")}</h3>
          <a
            href="https://sfma.sa"
            target="_blank"
            className="mt-6 text-white block"
          >
            {t("about.poweredBy")}
          </a>
        </div>
      </div>

      <div className="col-span-12">
        <div className="lg:grid md:grid grid-cols-12 px-16 mt-16 mb-10">
          <div className="lg:col-span-3 md:col-span-3 col-span-12 my-auto">
            <p
              style={{
                color: "rgb(68, 173, 210)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {t("about.aboutUs")}
            </p>
            <p
              style={{
                color: "rgb(16, 55, 131)",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {t("about.aboutExpo")}
            </p>
          </div>

          <div className="lg:col-span-9 md:col-span-9 col-span-12">
            <p className="text-sm leading-loose text-justify">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-8 col-span-12 px-16">
        <div className="card text-center p-4">
          <img
            src={about_image1}
            alt={t("about.card1ImageAlt")}
            className="mx-auto mb-4 w-24 h-24 object-cover"
          />
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: "rgb(68, 173, 210)" }}
          >
            {t("about.card1Title")}
          </h2>
          <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card1Description")}
          </p>
        </div>

        <div className="card text-center p-4">
          <img
            src={about_image2}
            alt={t("about.card2ImageAlt")}
            className="mx-auto mb-4 w-24 h-24 object-cover"
          />
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: "rgb(68, 173, 210)" }}
          >
            {t("about.card2Title")}
          </h2>
          <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card2Description")}
          </p>
        </div>

        <div className="card text-center p-4">
          <img
            src={about_image3}
            alt={t("about.card3ImageAlt")}
            className="mx-auto mb-4 w-24 h-24 object-cover"
          />
          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: "rgb(68, 173, 210)" }}
          >
            {t("about.card3Title")}
          </h2>
          <p style={{ color: "rgb(2, 48, 71)", textAlign: "justify" }}>
            {t("about.card3Description")}
          </p>
        </div>
      </div>

      <div className="col-span-12">
        <section
          className="register-with-us my-8 lg:px-16 md:px-16 px-5 py-16"
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className="lg:grid md:grid grid-cols-12">
            <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto mb-12">
              <p
                className="text-2xl"
                style={{ color: "rgb(68, 173, 210)", fontWeight: "bold" }}
              >
                {t("about.dontMissOut")}
              </p>
              <p className="mt-2 mb-8 text-3xl lg:w-96 lg:leading-relaxed md:leading-relaxed leading-10">
                {t("about.boostYourBrand")}
              </p>
              <div className="flex justify-start lg:-translate-x-0 md:-translate-x-0 -translate-x-5">
                <button className="btn-register col-span-12 lg:block md:block flex justify-center p-0">
                  <a href="/ar/register#ConferanceLogin">
                    {t("about.registerWithUs")}
                  </a>
                </button>
                <button className="btn-view h-fit my-auto p-0">
                  <Link
                    to={
                      i18n.language === "en"
                        ? `/en/sponsores#sponserForm`
                        : `/ar/sponsores#sponserForm`
                    }
                  >
                    {t("about.exhibitWithUs")}
                  </Link>
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-6 col-span-12 mx-2">
              <img
                src={RegisterWithUsImage}
                className="mx-auto w-full my-4"
                alt={t("about.ministerImageAlt")}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="col-span-12">
        <GetNewUpdates />
      </div>
    </section>
  );
};

export default About;
