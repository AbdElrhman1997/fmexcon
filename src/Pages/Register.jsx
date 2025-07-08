import React, { useEffect, useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { Helmet } from "react-helmet";
import { ImCalendar } from "react-icons/im";
import { useSearchParams, useNavigate } from "react-router-dom";

const Register = () => {
  const { i18n, t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tabFromUrl = searchParams.get("register_as");
  const [activeTab, setActiveTab] = useState(
    tabFromUrl ? tabFromUrl : "visitor"
  );
  console.log(tabFromUrl, activeTab);

  useEffect(() => {
    if (tabFromUrl) setActiveTab(tabFromUrl);
    else navigate(`?register_as=visitor`, { replace: true });
  }, [tabFromUrl]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`?register_as=${tab}`, { replace: true });
  };

  const Card = ({ icon, mainTitle, subTitle }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
      <div className="text-4xl text-main mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{mainTitle}</h3>
      <p className="text-xl font-semibold mb-2">{subTitle}</p>
    </div>
  );

  return (
    <section
      className="min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 text-center"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Helmet>
        <title>{t("navbar.register")}</title>
      </Helmet>

      <div className="grid grid-cols-12 col-span-12 container mx-auto">
        <div id="conferance_map" className="col-span-12 shadow-lg">
          <div className="md:flex justify-center mt-8 gap-6">
            <button
              onClick={() => handleTabClick("visitor")}
              className={`py-3 px-8 border rounded-xl md:w-1/3 w-[250px] md:my-0 my-2 font-bold text-xl ${
                activeTab === "visitor"
                  ? "bg-text text-white"
                  : "bg-[#E8E8E8] text-[#374151]"
              }`}
            >
              {t("common.visitor_exhibitor")}
            </button>
            <button
              onClick={() => handleTabClick("speaker")}
              className={`py-3 px-8 border rounded-xl md:w-1/3 w-[250px] md:my-0 my-2 font-bold text-xl ${
                activeTab === "speaker"
                  ? "bg-text text-white"
                  : "bg-[#E8E8E8] text-[#374151]"
              }`}
            >
              {t("common.speaker_exhibitor")}
            </button>
            <button
              onClick={() => handleTabClick("exhibitor")}
              className={`py-3 px-8 border rounded-xl md:w-1/3 w-[250px] md:my-0 my-2 font-bold text-xl ${
                activeTab === "exhibitor"
                  ? "bg-text text-white"
                  : "bg-[#E8E8E8] text-[#374151]"
              }`}
            >
              {t("common.register_exhibitor")}
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "visitor" && (
              <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                <RegistrationForm isVisitor={true} />
              </div>
            )}
            {activeTab === "speaker" && (
              <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                <RegistrationForm isSpeaker={true} />
              </div>
            )}
            {activeTab === "exhibitor" && (
              <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                <RegistrationForm isExhibitor={true} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-8">
        <Card
          icon={<FaPhoneAlt />}
          mainTitle={t("footer.contact.phone1")}
          subTitle={t("footer.contact.phone2")}
        />
        <Card icon={<MdOutlineEmail />} mainTitle="expo@sfma.sa" />
        <Card icon={<TbWorld />} mainTitle="sfma.sa" />
        <Card icon={<FaLocationDot />} mainTitle={t("register.address")} />
        <Card icon={<ImCalendar />} mainTitle={t("register.date")} />
        <Card
          icon={<FaClock />}
          mainTitle={t("register.time1")}
          subTitle={t("register.time2")}
        />
      </div>

      <div className="col-span-12 md:h-[500px] h-[300px] container mx-auto md:mb-20 mb-12 mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.726470379736!2d46.724197374260015!3d24.75307564954822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f026dbbf7a31f%3A0xf8461675a7c66027!2sRiyadh%20International%20Convention%20%26%20Exhibition%20Center!5e1!3m2!1sen!2seg!4v1732955069489!5m2!1sen!2seg"
          className="w-full h-full"
          loading="lazy"
          style={{ border: "0px" }}
          title="Riyadh International Convention & Exhibition Center"
        ></iframe>
      </div>
    </section>
  );
};

export default Register;
