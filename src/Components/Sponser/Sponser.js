import React, { useEffect, useState } from "react";
import "./Sponser.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../Components/Carousel/Carousel";
import axios from "axios";

const Sponser = () => {
  const { t, i18n } = useTranslation();
  const [Sponsors, setSponsors] = useState([]);

  const get_sponsers_sponsor = async (type) => {
    await axios
      .get(`https://admin.fmexcon.com/api/getNewSponsorApi?type=${type}`)
      .then((res) => {
        setSponsors((prev) => [...prev, res?.data?.data]);
      })
      .catch(() => {});
  };

  useEffect(() => {
    for (let index = 0; index < 6; index++) {
      get_sponsers_sponsor(index + 1);
    }
    console.log(Sponsors);
  }, []);

  return (
    <section className="" dir={i18n.language == "en" ? "ltr" : "rtl"}>
      <p
        style={{
          fontWeight: "bold",
          color: "#44add2",
        }}
        className={` mx-16 text-3xl mb-6 ${
          i18n.language == "en"
            ? "lg:text-left md:text-left text-center"
            : "lg:text-right md:text-right text-center"
        }`}
      >
        {t("")}
      </p>
      {Sponsors?.map((sponsors, index) => {
        return (
          <>
            <p
              className={` mx-16 text-3xl mb-6 text-[#44add2] font-bold ${
                i18n.language == "en"
                  ? "2xl:text-left xl:text-left lg:text-left md:text-left text-center"
                  : "2xl:text-right xl:text-right lg:text-right md:text-right text-center"
              }`}
            >
              {index == "0"
                ? t("الراعي الشريك")
                : index == "1"
                ? t("الراعي الاستراتيجي")
                : index == "2"
                ? t("الراعي الرئيسي")
                : index == "3"
                ? t("الراعي الماسي")
                : index == "4"
                ? t("الراعي الذهبي")
                : index == "5"
                ? t("الراعي الفضي")
                : ""}
            </p>
            <div>
              {index == "0" ? (
                sponsors?.map((sponser) => {
                  return (
                    <img
                      src={`https://admin.fmexcon.com/public/images/${sponser?.image}`}
                      className=" mx-auto lg:w-96 md:w-80 w-72"
                      alt="strategy_image"
                    />
                  );
                })
              ) : index == "1" ? (
                sponsors?.map((sponser) => {
                  return (
                    <img
                      src={`https://admin.fmexcon.com/public/images/${sponser?.image}`}
                      className=" mx-auto lg:w-80 md:w-64 w-72"
                      alt="strategy_image"
                    />
                  );
                })
              ) : index == "2" ? (
                sponsors?.map((sponser) => {
                  return (
                    <img
                      src={`https://admin.fmexcon.com/public/images/${sponser?.image}`}
                      className=" mx-auto lg:w-72 md:w-56 w-48"
                      alt="minister_image"
                    />
                  );
                })
              ) : index == "3" ? (
                sponsors?.map((sponser) => {
                  return (
                    <img
                      src={`https://admin.fmexcon.com/public/images/${sponser?.image}`}
                      className=" mx-auto lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 lg:w-64 md:w-56 w-44"
                      alt="minister_image"
                    />
                  );
                })
              ) : index == "4" ? (
                <div className="mb-16">
                  <Carousel sponsers={sponsors} />
                </div>
              ) : index == "5" ? (
                <div>
                  <Carousel sponsers={sponsors} />
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Sponser;
