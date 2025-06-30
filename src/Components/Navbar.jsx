import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const langPrefix = i18n.language === "en" ? "/en" : "/ar";

  const navLinksLG = [
    { to: "/home", label: "navbar.home" },
    { to: "/about", label: "navbar.about" },
    {
      label: "navbar.conference",
      subMenu: [{ to: "/speackers", label: "navbar.speakers" }],
    },
    { to: "/sponsores", label: "navbar.sponsors" },
    { to: "/register", label: "navbar.register" },
  ];

  const navLinksMobile = [
    { to: "/home", label: "navbar.home" },
    { to: "/about", label: "navbar.about" },
    { to: "/conferance", label: "navbar.conference" },
    { to: "/speackers", label: "navbar.speakers" },
    { to: "/sponsores", label: "navbar.sponsors" },
    { to: "/register", label: "navbar.register" },
  ];

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nLang", newLang);
    const newPath = window.location.pathname.replace(
      /^(\/en|\/ar)/,
      `/${newLang}`
    );
    window.history.replaceState(null, "", newPath);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const renderNavLinksDesktop = () =>
    navLinksLG.map(({ to, label, subMenu }) => {
      const currentPath = window.location.pathname;
      const isOpen = activeDropdown === label;
      const isActiveParent = subMenu
        ? subMenu.some((item) =>
            currentPath.startsWith(`${langPrefix}${item.to}`)
          )
        : currentPath.startsWith(`${langPrefix}${to}`);

      if (subMenu) {
        return (
          <div key={label} className="relative group w-fit text-center">
            <button
              type="button"
              onClick={() => toggleDropdown(label)}
              className={`flex  items-center gap-1 py-2 text-sm font-bold rounded-md transition  `}
            >
              {t(label)}
              {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>
            <div
              className={`absolute top-full mt-2 right-0 bg-white rounded-md shadow-lg border border-gray-200 min-w-[160px] z-50 transition-all duration-300 origin-top transform ${
                isOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200" />
              {subMenu.map((item) => (
                <NavLink
                  key={item.to}
                  to={`${langPrefix}${item.to}`}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm  font-semibold transition hover:bg-gray-100 hover:text-primary ${
                      isActive ? "text-[#44add2]" : "text-gray-700"
                    }`
                  }
                  onClick={() => setActiveDropdown(null)}
                >
                  {t(item.label)}
                </NavLink>
              ))}
            </div>
          </div>
        );
      }

      return (
        <NavLink
          key={to}
          to={`${langPrefix}${to}`}
          end={to === "/home"}
          className={({ isActive }) =>
            `text-sm font-bold hover:text-primary transition  ${
              isActive ? "text-[#44add2]" : ""
            }`
          }
        >
          {t(label)}
        </NavLink>
      );
    });

  const renderNavLinksMobile = () =>
    navLinksMobile.map(({ to, label }) => (
      <NavLink
        key={to}
        to={`${langPrefix}${to}`}
        end={to === "/home"}
        className={({ isActive }) =>
          `text-sm font-medium ${
            isActive ? "text-primary font-bold" : "text-gray-700"
          }`
        }
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {t(label)}
      </NavLink>
    ));

  return (
    <header
      id="header"
      className="fixed w-full top-0 left-0 bg-white shadow-md z-50"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="flex justify-between items-center py-3 container mx-auto px-4">
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-main text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <Link className="text-2xl font-bold" to="/">
          <img src="/images/Logo-Header.png" className="w-20" alt="Logo" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-black">
          {renderNavLinksDesktop()}
          <div
            onClick={switchLanguage}
            className="rounded-md p-2 w-24 bg-[#28a4a8] hover:bg-[#1a7679] cursor-pointer text-center"
          >
            <p className="text-white font-bold">
              {i18n.language === "en" ? "العربية" : "English"}
            </p>
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-[64px] right-0 h-full w-full bg-white transform transition-all duration-500 ease-in-out z-40 lg:hidden ${
          isMobileMenuOpen ? "clip-path-open" : "clip-path-closed"
        }`}
        style={{ color: "#4b5563" }}
      >
        <nav className="flex flex-col gap-6 pt-8 items-center text-sm font-medium">
          {renderNavLinksMobile()}
          <div
            onClick={() => {
              switchLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="rounded-md p-2 w-24 bg-[#44add2] hover:bg-[#319cc4] cursor-pointer text-center"
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
