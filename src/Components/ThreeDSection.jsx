import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ThreeDSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/images/3d_design_1.jpeg",
    "/images/3d_design_2.jpeg",
    "/images/3d_design_3.jpeg",
    "/images/3d_design_4.jpeg",
    "/images/3d_design_5.jpeg",
    "/images/3d_design_6.jpeg",
    "/images/3d_design_7.jpeg"
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  return (
    <div className='z-20'>
      <p className="text-text font-bold md:mb-2 mt-10 text-center md:text-4xl text-2xl leading-loose">
        {t("common.3d_sedction_head")}
      </p>
      <p className="text-text font-semibold mb-1 text-center md:text-xl text-lg leading-loose">
        {t("common.3d_sedction_title")}
      </p>
      <div className="mx-auto mt-6 cursor-pointer"             
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-center">
          <img
            src={images[0]}
            className="w-[50%] object-cover"
            alt={t("about.aboutImageAlt")}
          />
          <img
            src={images[1]}
            className="w-[50%] object-cover"
            alt={t("about.aboutImageAlt")}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-[50%] ">
            <img
              src={images[2]}
              className="w-full h-full object-cover "
              alt={t("about.aboutImageAlt")}
            />
          </div>
          <div className="w-[50%] relative">
            <img
              src={images[3]}
              className="w-full h-full object-cover"
              alt={t("about.aboutImageAlt")}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">+4</span>
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 top-16"
    onClick={() => setIsModalOpen(false)} // Close modal on background click
  >
    <div
      className="relative bg-white p-12 rounded-lg max-w-6xl w-full h-[85vh] overflow-hidden"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
    >
      <button
              className="absolute top-4 right-6 text-text text-2xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
      <div className="flex flex-col gap-4 overflow-y-auto p-4 h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-auto object-cover rounded-lg"
            alt={t("about.aboutImageAlt")}
          />
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ThreeDSection;
