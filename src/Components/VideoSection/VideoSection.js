import React from "react";
import "./VideoSection.css";
import { useTranslation } from "react-i18next";
import VisionImage from "../../Images/Vision.png";
import MessageImage from "../../Images/Message.png";
import ParticipantsImage from "../../Images/Participants.png";
import sloganImage from "../../Images/slogan.png";
import { BsRobot } from "react-icons/bs";

const VideoSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="lg:px-16 md:px-16 px-6"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 col-span-12 lg:my-6 md:my-6 my-16 md:flex md:justify-start md:gap-x-2 sm:flex sm:justify-around sm:gap-x-2 lg:flex-col">
          <div className="mx-auto lg:my-0 md:my-0 sm:my-0 my-4">
            <div className="flex gap-x-2 lg:justify-start md:justify-start justify-center">
              <img
                className="w-12 h-12 object-contain"
                src={VisionImage}
                alt="VisionImage"
              />
              <p
                className="text-3xl font-bold"
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "rgb(68, 173, 210)",
                  margin: "auto 0px",
                }}
              >
                {t("videoSection.visionTitle")}
              </p>
            </div>
            <p
              className="lg:mx-0 md:mx-0 mx-auto lg:w-[220px] md:w-[220px] w-[320px] font-semibold"
              style={{
                color: "rgb(2, 48, 71)",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              {t("videoSection.visionDescription")}
            </p>
          </div>
          <div className="mx-auto lg:my-0 md:my-0 sm:my-0 my-4">
            <div className="flex gap-x-2 lg:justify-start md:justify-start justify-center">
              <img
                className="w-12 h-12 object-contain"
                src={MessageImage}
                alt="MessageImage"
              />
              <p
                className="text-3xl font-bold"
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "rgb(68, 173, 210)",
                  margin: "auto 0px",
                }}
              >
                {t("videoSection.messageTitle")}
              </p>
            </div>
            <p
              className="lg:mx-0 md:mx-0 mx-auto lg:w-[220px] md:w-[220px] w-[320px] font-semibold"
              style={{
                color: "rgb(2, 48, 71)",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              {t("videoSection.messageDescription")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 lg:my-6 md:my-6 my-16 h-80">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/DtxmAWzzy6Q?si=6GsH9FznXsUryiaN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="lg:col-span-3 col-span-12 lg:my-6 md:my-6 my-16 md:flex md:justify-start md:gap-x-2 sm:flex sm:justify-around sm:gap-x-2 lg:flex-col">
          <div className="mx-auto lg:my-0 md:my-0 sm:my-0 my-4">
            <div className="flex gap-x-2 lg:justify-start md:justify-start justify-center">
              <img
                className="w-12 h-12 object-contain"
                src={ParticipantsImage}
                alt="ParticipantsImage"
              />
              <p
                className="text-3xl font-bold"
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "rgb(68, 173, 210)",
                  margin: "auto 0px",
                }}
              >
                {t("videoSection.participantsTitle")}
              </p>
            </div>
            <p
              className="lg:mx-0 md:mx-0 mx-auto lg:w-[220px] md:w-[220px] w-[320px] font-semibold"
              style={{
                color: "rgb(2, 48, 71)",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              {t("videoSection.participantsDescription")}
            </p>
          </div>
          <div className="mx-auto lg:my-24 md:my-0 sm:my-0 my-4">
            <div className="flex gap-x-2 lg:justify-start md:justify-start justify-center">
              <BsRobot className="w-8 h-8 mx-2 text-[#44add2]" />

              <p
                className="text-3xl font-bold"
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "rgb(68, 173, 210)",
                  margin: "auto 0px",
                }}
              >
                {t("videoSection.sloganTitle")}
              </p>
            </div>
            <p
              className="lg:mx-0 md:mx-0 mx-auto font-semibold lg:text-justify md:text-justify text-center mt-3"
              style={{
                color: "rgb(2, 48, 71)",
                fontSize: "14px",
                width: "220px",
              }}
            >
              {t("videoSection.sloganDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
