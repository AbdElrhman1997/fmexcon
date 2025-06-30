import { useTranslation } from "react-i18next";

const SuccessModal = ({ tog_modal, successModal, fromGetUpdates }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className=" transition-opacity"
    >
      {successModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => {
            tog_modal();
          }}
        >
          <div
            className={`absolute ${
              i18n.language == "en" ? "md:h-[370px] h-[400px]" : "h-[320px]"
            } pb-3 pt-[6px] px-4 -z-10 bg-white text-black md:w-[400px] w-[70%] rounded-2xl flex flex-col justify-between`}
          >
            <p
              className={`text-2xl cursor-pointer ${
                i18n.language == "en" ? "text-left" : "text-right"
              }`}
              onClick={() => {
                tog_modal();
              }}
            >
              x
            </p>
          </div>
          <div
            className="bg-text rounded-lg shadow-lg p-6 md:w-[500px] w-[85%] text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-3xl font-bold mb-4 text-white pt-2">
              {t("common.success_login")}
            </h2>
            <p className="text-xl text-white mt-2">
              {t("common.send_attend_data")}
            </p>
            <p className="text-xl mb-6 text-white mt-1">
              {t("common.on_email")}
            </p>
            <form>
              <div className="flex justify-end">
                <a
                  href="https://admin.fmexcon.com/api/share-with-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-[6px] bg-[#0077B5] text-white hover:bg-[#005582] hover:text-white text-lg rounded-xl font-bold mx-auto flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.781-1.75-1.732s.784-1.732 1.75-1.732c.967 0 1.75.781 1.75 1.732s-.783 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.869 0-2.155 1.46-2.155 2.968v5.699h-3v-10h2.876v1.367h.042c.4-.756 1.379-1.555 2.839-1.555 3.033 0 3.594 1.996 3.594 4.591v5.597z" />
                  </svg>
                  <span className="mx-2">{t("common.share_in_linkedin")}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessModal;
