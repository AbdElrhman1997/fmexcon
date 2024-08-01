import React from "react";
import "./Sponser.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Sponser = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="" dir={i18n.language == "en" ? "ltr" : "rtl"}>
      <p
        style={{
          fontWeight: "bold",
          color: "#44add2",
        }}
        className={`mb-10 mx-16 text-3xl ${
          i18n.language == "en"
            ? "lg:text-left md:text-left text-center"
            : "lg:text-right md:text-right text-center"
        }`}
      >
        الراعي الاستراتيجي
      </p>
      <div className=" lg:col-span-6 md:col-span-6 col-span-12">
        {/* <img
          src={CreativityImage}
          className=" mx-auto w-full my-4"
          alt="minister_image"
        /> */}
      </div>
    </section>
  );
};

export default Sponser;
