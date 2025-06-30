import React, { useEffect, useState } from "react";
import "./Sponser.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../Components/Carousel/Carousel";
import axios from "axios";
import SilverSponsers from "../SilverSponsers";
import PartnersSponsers from "../PartnersSponsers";

const Sponser = () => {
  const { t, i18n } = useTranslation();
  const [Sponsors, setSponsors] = useState([]); // Initialize state for sponsors

  const getSponsors = async (type) => {
    try {
      const res = await axios.get(
        `https://admin.fmexcon.com/api/getNewSponsorApi`
      );
      setSponsors(res?.data?.data);
    } catch (error) {
      console.error(`Error fetching sponsors for type ${type}:`, error);
    }
  };

  useEffect(() => {
    getSponsors();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="" dir={"rtl"}>
      {[...Array(8)].map((_, index) => {
        // Filter sponsors by type based on the current index
        const filteredSponsors = Sponsors.filter(
          (sponsor) => sponsor.type === index + 1
        );
        return filteredSponsors.length ? (
          <div key={`sponsor-section-${index}`}>
            <p
              className={`text-text font-bold  mt-10 text-center md:text-4xl text-3xl ${
                index === 4 || index === 5 ? "md:mb-10 mb-8" : "md:mb-12 mb-8"
              }`}
            >
              {index === 0
                ? t("sponsors.partnerSponsor")
                : index === 1
                ? t("sponsors.strategicSponsor")
                : index === 2
                ? t("sponsors.mainSponsor")
                : index === 3
                ? t("sponsors.diamondSponsor")
                : index === 4
                ? t("sponsors.goldSponsor")
                : index === 5
                ? t("sponsors.sliverPartners")
                : index === 6
                ? t("sponsors.partnersSponser")
                : index === 7
                ? t("sponsors.participants")
                : ""}
            </p>
            {index === 4 ? (
              // Carousel for Gold and Silver sponsors
              <div className="md:mb-12 mb-0">
                <Carousel sponsers={filteredSponsors} />
              </div>
            ) : index === 5 ? (
              // Carousel for Gold and Silver sponsors
              <div className="mb-8">
                <SilverSponsers sponsers={filteredSponsors} />
              </div>
            ) : index === 6 ? (
              // Carousel for Gold and Silver sponsors
              <div className="mb-8">
                <PartnersSponsers sponsers={filteredSponsors} />
              </div>
            ) : index === 7 ? (
              // Carousel for Gold and Silver sponsors
              <div className="mb-8">
                <PartnersSponsers sponsers={filteredSponsors} />
              </div>
            ) : (
              // Display sponsor cards for other types
              <div className="md:flex flex-wrap md:flex-row justify-center flex-col md:gap-12 gap-y-12 gap-x-0 md:m-auto m-4">
                {filteredSponsors.map((sponsor) => (
                  <div
                    key={`sponsor-${sponsor.id}`}
                    className={`card px-8 pt-4 text-white md:my-auto my-8  ${
                      index == 0
                        ? "md:w-[42%] w-[100%]"
                        : index == 1
                        ? "md:w-[37%] w-[100%]"
                        : index == 2
                        ? "md:w-[30%] w-[100%]"
                        : index == 3
                        ? "md:w-[24%] w-[100%]"
                        : "w-fit"
                    }`}
                    style={{
                      borderTop:
                        index == 0
                          ? ""
                          : index == 1
                          ? "14px solid #13A89E"
                          : index == 2
                          ? "14px solid #3F54A5"
                          : index == 3
                          ? "14px solid #34C0C4"
                          : "14px solid red",
                    }}
                  >
                    <div className="card-image md:min-h-[200px] flex items-center justify-center">
                      <img
                        src={`https://admin.fmexcon.com/public/images/${sponsor.image}`}
                        className={` mx-auto ${
                          index == 0
                            ? "md:w-80 w-72"
                            : index == 1
                            ? "md:w-60 w-72"
                            : index == 2
                            ? "md:w-60 w-72"
                            : index == 3
                            ? "md:w-52 w-72"
                            : "w-fit"
                        }`}
                        alt="sponsor_image"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div className="p-4">
                      {i18n.language === "en" ? (
                        <a
                          href={sponsor.url || "#"}
                          className="card-link text-xl hover:opacity-70 text-text"
                          target="_blank"
                          dir="ltr"
                        >
                          Visit Us →
                        </a>
                      ) : (
                        <a
                          href={sponsor.url || "#"}
                          className="card-link text-xl hover:opacity-60 text-text"
                          dir="rtl"
                          target="_blank"
                        >
                          تعرف علينا ←
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null;
      })}
    </section>
  );
};

export default Sponser;
