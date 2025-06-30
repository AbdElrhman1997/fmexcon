import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Speackers = ({ from_home }) => {
  const [speakers, setSpeakers] = useState([]);
  const [totalSpeackers, setTotalSpeackers] = useState([]);
  const [per_page, setPerPage] = useState(12);
  const { t, i18n } = useTranslation();

  const getSpeakers = async () => {
    await axios
      .get(
        `https://admin.fmexcon.com/api/newConferanceApi?is_featured=${
          from_home ? 1 : 0
        }&per_page=${per_page}`
      )
      .then((res) => {
        setSpeakers(res?.data?.data);
        setTotalSpeackers(res?.data?.total);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getSpeakers();
  }, [per_page]);

  return (
    <div
      className="container mx-auto lg:mb-20 mb-10"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <h1 className="lg:text-3xl text-2xl font-bold lg:mt-12 mt-8 my-6 text-[#013047] mb-10">
        {t("common.our_experts")}
      </h1>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <AnimatePresence>
          {speakers?.map((speaker, index) => (
            <motion.div
              key={speaker?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                to={`/${i18n.language}/speacker/${speaker?.id}`}
                className="block relative rounded-md overflow-hidden group shadow-md cursor-pointer"
              >
                <img
                  src={`https://admin.fmexcon.com/public/images/${speaker?.image}`}
                  alt="Speaker"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="font-bold text-lg">
                    {i18n.language === "en"
                      ? speaker?.name_en
                      : speaker?.name_ar}
                  </p>
                  <p className="text-sm">
                    {i18n.language === "en" ? speaker?.job_en : speaker?.job_ar}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {from_home ? (
        <Link
          className="block btn-why-sponsor h-fit w-fit py-[10px] mx-auto mt-6 font-bold hover:bg-white hover:text-text cursor-pointer"
          style={{ padding: "12px 36px" }}
          to={`/${i18n.language}/speackers`}
        >
          {t("common.more")}
        </Link>
      ) : (
        <div
          className={`${
            totalSpeackers < per_page ? "hidden" : ""
          } block btn-why-sponsor h-fit w-fit py-[10px] mx-auto mt-6 font-bold hover:bg-white hover:text-text cursor-pointer`}
          style={{ padding: "12px 36px" }}
          onClick={() => setPerPage((prev) => prev + 9)}
        >
          {t("common.more")}
        </div>
      )}
    </div>
  );
};

export default Speackers;
