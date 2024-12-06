import React from "react";
import aboutImage from "../Images/aboutImage.png";
import RegistrationForm from "../Components/RegistrationForm";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockHour5Filled } from "react-icons/tb";

const Register = () => {
  const { i18n, t } = useTranslation();

  return (
    <section
      className="min-h-[calc(100vh - 64px)] grid grid-cols-12 gap-5 text-center"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:col-span-12 col-span-12 back-ground">
        <img
          src={aboutImage}
          className="about-img col-span-12"
          alt="aboutImage"
        />
        <div className="text">
          <h3
            className="xl:translate-y-0 lg:translate-y-0 md:translate-y-0 -translate-y-14"
            style={{ lineHeight: 1.4 }}
          >
            {t("register.title")} {/* Use translation key */}
          </h3>
          <a
            href="https://sfma.sa"
            target="_blank"
            className="xl:mt-4 lg:mt-4 md:mt-4 -mt-10 text-white block"
          >
            {t("about.poweredBy")}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12">
        {/* Left section with contact information */}
        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 grid grid-cols-12">
          <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 translate-y-6   h-full">
            <div className="md:flex md:justify-start md:gap-x-2 sm:flex sm:justify-around sm:gap-x-2 mx-4">
              <div className="w-full">
                {/* Phone numbers */}
                <div className="my-4">
                  <div className="flex  flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <div className="translate-y-3 flex  flex-col items-center justify-center">
                      <FaPhoneAlt className="text-[#44add2] text-3xl " />
                      <p className="text-sm mt-2">
                        {t("footer.contact.phone1")}
                      </p>
                      <p className="text-sm">{t("footer.contact.phone2")}</p>
                    </div>
                  </div>
                </div>
                {/* Website */}
                <div className="my-4">
                  <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-3xl text-[#44add2] my-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M483.049 159.706c10.855-24.575 21.424-60.438 21.424-87.871 0-72.722-79.641-98.371-209.673-38.577-107.632-7.181-211.221 73.67-237.098 186.457 30.852-34.862 78.271-82.298 121.977-101.158C125.404 166.85 79.128 228.002 43.992 291.725 23.246 329.651 0 390.94 0 436.747c0 98.575 92.854 86.5 180.251 42.006 31.423 15.43 66.559 15.573 101.695 15.573 97.124 0 184.249-54.294 216.814-146.022H377.927c-52.509 88.593-196.819 52.996-196.819-47.436H509.9c6.407-43.581-1.655-95.715-26.851-141.162zM64.559 346.877c17.711 51.15 53.703 95.871 100.266 123.304-88.741 48.94-173.267 29.096-100.266-123.304zm115.977-108.873c2-55.151 50.276-94.871 103.98-94.871 53.418 0 101.981 39.72 103.981 94.871H180.536zm184.536-187.6c21.425-10.287 48.563-22.003 72.558-22.003 31.422 0 54.274 21.717 54.274 53.722 0 20.003-7.427 49.007-14.569 67.867-26.28-42.292-65.986-81.584-112.263-99.586z"></path>
                    </svg>
                    <p className="text-sm">sfma.sa</p>
                  </div>
                </div>
                {/* Date information */}
                <div className="my-4 lg:block md:block sm:block">
                  <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-3xl text-[#44add2] my-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-240c0-13.3-10.7-24-24-24h-32V8c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v16h-64V8c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v16H24c-13.3 0-24 10.7-24 24v336c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V144zM16 144h416v336H16V144zm368 208H64c-13.3 0-24 10.7-24 24s10.7 24 24 24h320c13.3 0 24-10.7 24-24s-10.7-24-24-24z"></path>
                    </svg>
                    <p className="text-sm">{t("register.date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 translate-y-6 h-full">
            <div className="md:flex md:justify-start md:gap-x-2 sm:flex sm:justify-around sm:gap-x-2 mx-4">
              <div className="w-full">
                {/* Phone numbers */}
                <div className="my-4">
                  <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <MdOutlineEmail className="text-[#44add2] text-4xl" />

                    <p className="text-sm">expo@sfma.sa</p>
                  </div>
                </div>
                {/* Website */}
                <div className="my-4">
                  <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <FaLocationDot className="text-[#44add2] text-4xl" />

                    <p className="text-sm mt-2">{t("register.address")}</p>
                  </div>
                </div>
                {/* Date information */}
                <div className="my-4 lg:block md:block sm:block">
                  <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg h-32 p-4 flex-0 lg:flex-1 w-full text-center">
                    <div className="translate-y-2 flex  flex-col items-center justify-center">
                      <TbClockHour5Filled className="text-3xl text-[#44add2]" />

                      <p className="text-sm mt-2">{t("register.time1")}</p>
                      <p className="text-sm">{t("register.time2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 p-4 2xl:min-h-[400px] xl:min-h-[400px] min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.726470379736!2d46.724197374260015!3d24.75307564954822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f026dbbf7a31f%3A0xf8461675a7c66027!2sRiyadh%20International%20Convention%20%26%20Exhibition%20Center!5e1!3m2!1sen!2seg!4v1732955069489!5m2!1sen!2seg"
              style={{ border: 0 }}
              className="w-full h-full"
              allowfullscreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Right section with registration form */}
        <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
          <RegistrationForm fromRegister={true} />
        </div>
      </div>
    </section>
  );
};

export default Register;
