import React from "react";
import "./RegisterWithUs.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const RegisterWithUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`register-with-us my-8 py-16 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 my-auto mb-12">
          <p
            style={{
              color: "#44add2",
              fontWeight: "bold",
            }}
            className="text-2xl"
          >
            {t("registerWithUs.title")}
          </p>
          <p className="mt-2 mb-8 text-3xl lg:w-96 lg:leading-relaxed md:leading-relaxed leading-10">
            {t("registerWithUs.subtitle")}
          </p>
          <div className="flex justify-start">
            <button className="btn-register col-span-12 lg:block md:block flex justify-center p-0">
              <Link to={"register"}>{t("registerWithUs.register")}</Link>
            </button>
            <button className="btn-view h-fit my-auto p-0">
              <Link to={"sponsores"}>{t("registerWithUs.view")}</Link>
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 mx-2">
          <img
            src="/images/RegisterWithUs.png"
            className="mx-auto w-full my-4"
            alt="Register With Us"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterWithUs;
