import React from "react";
import "./Footer.css";
import image1 from "../../Images/sfma.png";
import image2 from "../../Images/mom.png";
import image3 from "../../Images/fmTech.png";
import image4 from "../../Images/sary.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "en" ? "/en" : "/ar";

  return (
    <footer
      className="bg-slate-800 py-5 pt-10 footer"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="lg:grid md:grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 md:col-span-6 lg:my-6 md:my-6 my-16">
          <img src={image4} className="w-32 mx-auto" alt="footerImage" />
          <p className="text-white font-semibold my-6 px-3 text-justify">
            {t("footer.description")}
          </p>
        </div>

        <div className="lg:col-span-3 md:col-span-6 text-white lg:my-6 md:my-6 my-16">
          <p className="text-3xl font-bold">{t("footer.linksTitle")}</p>
          <Link className="block mx-3 my-5 text-xl" to={`${langPrefix}/`}>
            {t("footer.links.home")}
          </Link>
          <Link className="block mx-3 my-5 text-xl" to={`${langPrefix}/about`}>
            {t("footer.links.about")}
          </Link>
          <Link
            className="block mx-3 my-5 text-xl"
            to={`${langPrefix}/conferance`}
          >
            {t("footer.links.conference")}
          </Link>
          <Link
            className="block mx-3 my-5 text-xl"
            to={`${langPrefix}/sponsores`}
          >
            {t("footer.links.sponsors")}
          </Link>
          <Link
            className="block mx-3 my-5 text-xl"
            to={`${langPrefix}/register`}
          >
            {t("footer.links.register")}
          </Link>
          <a
            className="block mx-3 my-5 text-xl"
            href="https://2024.fmexcon.com/"
            target="_blank"
          >
            {t("tourism.ministry.title")}
          </a>
        </div>

        <div className="lg:col-span-3 md:col-span-6 text-white lg:my-6 md:my-6 my-16">
          <p className="text-3xl font-bold">{t("footer.contactTitle")}</p>
          <a
            className="block mx-3 my-2 text-xl"
            href="https://wa.me/+966503776726"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer.contact.phone1")}
          </a>
          <a
            className="block mx-3 my-2 text-xl"
            href="https://wa.me/+966554222273"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer.contact.phone2")}
          </a>
          <a className="block mx-3 my-2 text-xl" href="/">
            {t("footer.contact.address")}
          </a>
          <div className="flex my-4 justify-center gap-x-10 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl text-lg">
            <a href="https://x.com/Sfma_Expo" target="_blank">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D9%84%D9%85%D9%84%D8%AA%D9%82%D9%89-%D9%88%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D8%B6-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A-%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%81%D9%82-sfma-expo-793226320"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/sfma_expo/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 lg:my-6 md:my-6 my-16">
          <img src={image1} className="footerImg mx-auto" alt="footerImage" />
          {/* <img
            src={image2}
            className="footerImg mx-auto my-5"
            alt="footerImage"
          />
          <img src={image3} className="footerImg mx-auto" alt="footerImage" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
