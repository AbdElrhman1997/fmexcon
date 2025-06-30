import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Speacker = () => {
  const [speaker, setSpeaker] = useState([]);
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const getSpeaker = async () => {
    await axios
      .get(`https://admin.fmexcon.com/api/newConferanceDetailsApi/${id}`)
      .then((res) => {
        setSpeaker(res?.data?.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getSpeaker();
  }, []);

  return (
    <div
      className="container mx-auto mt-14"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="bg-[#F6F6F6] lg:max-w-2/3 mx-auto shadow flex items-center justify-start lg:col-span-1 md:col-span-2 col-span-3 rounded-md text-center gap-x-6 lg:p-6 p-4">
        <div className="border-2 border-[var(--second_main)] rounded-md">
          <img
            src={`https://admin.fmexcon.com/public/images/${speaker?.image}`}
            alt="About Us"
            width={500}
            height={500}
            className="lg:w-40 w-28 lg:h-40 h-28 object-cover rounded-md "
          />
        </div>
        <div className="text-start">
          <p className="font-bold lg:text-3xl text-xl text-text">
            {i18n.language == "en" ? speaker?.name_en : speaker?.name_ar}
          </p>
          <p className="lg:text-base text-[13px]">
            {i18n.language == "en"
              ? speaker?.job_title_en
              : speaker?.job_title_ar}
          </p>
        </div>
      </div>
      <div className=" mx-auto lg:mt-8 mt-6 ">
        <div
          className="md:mb-8 xl:mb-12 md:text-lg xl:text-xl md:leading-8 xl:leading-9 "
          dangerouslySetInnerHTML={{
            __html:
              i18n.language === "en"
                ? speaker?.description_en
                : speaker?.description_ar,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Speacker;
