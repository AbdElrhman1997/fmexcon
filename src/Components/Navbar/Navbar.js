import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Images/logo-dark.png";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const langPrefix = i18n.language === "en" ? "/en" : "/ar";

  return (
    <header
      id="header"
      className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white text-white font-semibold shadow-lg min-h-[64px]"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-main text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <Link className="text-2xl font-bold" to={"/"}>
          <img src={logo} className="w-52" alt="Logo" />
        </Link>
        <nav
          className={`hidden lg:flex gap-x-8 justify-center items-center text-[12px] text-black`}
        >
          <NavLink
            to={`${langPrefix}`}
            className={({ isActive }) => isActive && "active"}
            end
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.home")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/about`}
            className={({ isActive }) => isActive && "active"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.about")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/conferance`}
            className={({ isActive }) => isActive && "active"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.conference")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/sponsores`}
            className={({ isActive }) => isActive && "active"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.sponsors")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/register`}
            className={({ isActive }) => isActive && "active"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.register")}
          </NavLink>
          {/* <NavLink
            to={`${langPrefix}/activities`}
            className={({ isActive }) => isActive && "active"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.activities")}
          </NavLink> */}
          <div
            onClick={switchLanguage}
            className="rounded-md p-2 w-24 lg:block md:block hidden bg-[#44add2] hover:bg-[#319cc4] cursor-pointer"
          >
            <p className="text-white font-bold text-xs">
              {i18n.language === "en" ? "العربية" : "English"}
            </p>
          </div>
          {/* <div
            onClick={switchLanguage}
            className="rounded-md p-2 w-24 lg:block md:block hidden bg-[#44add2] hover:bg-[#319cc4] cursor-pointer"
          >
            <p className="text-white font-bold text-xs">
              {i18n.language === "en" ? "Conference 2024" : "مؤتمر 2024"}
            </p>
          </div> */}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] right-0 h-full w-full bg-white transform transition-all duration-500 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "clip-path-open" : "clip-path-closed"
        }`}
        style={{ color: "#4b5563" }}
      >
        <nav className="flex flex-col md:gap-y-4 gap-y-12 pt-8 items-center">
          <NavLink
            to={`${langPrefix}`}
            className={({ isActive }) => isActive && "active_mobile"}
            end
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.home")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/about`}
            className={({ isActive }) => isActive && "active_mobile"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.about")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/conferance`}
            className={({ isActive }) => isActive && "active_mobile"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.conference")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/sponsores`}
            className={({ isActive }) => isActive && "active_mobile"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.sponsors")}
          </NavLink>
          <NavLink
            to={`${langPrefix}/register`}
            className={({ isActive }) => isActive && "active_mobile"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.register")}
          </NavLink>
          {/* <NavLink
            to={`${langPrefix}/activities`}
            className={({ isActive }) => isActive && "active_mobile"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navbar.activities")}
          </NavLink> */}
          <div
            onClick={() => {
              switchLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="rounded-md p-2 w-24  bg-[#44add2] hover:bg-[#319cc4] cursor-pointer"
          >
            <p className="text-white font-bold text-xs">
              {i18n.language === "en" ? "العربية" : "English"}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
