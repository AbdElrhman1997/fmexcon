import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ label, items }) => {
  const lang = useLocale();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center gap-1 text-gray-800 hover:text-primary transition text-sm"
        onClick={toggleDropdown}
      >
        {label} <FaChevronDown size={12} />
      </button>

      {open && (
        <div
          className="absolute top-[140%] left-1/2 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 
        transition-all duration-200 ease-in-out animate-dropdown z-40 -translate-x-1/2"
        >
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-gray-100" />
          <ul className="p-3 space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${lang}/${item.href}`}
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
