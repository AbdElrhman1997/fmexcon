import { useTranslation } from "react-i18next";

const FailedModal = ({ tog_failed_modal, failedModal, fromGetUpdates }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className=" transition-opacity"
    >
      {failedModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => {
            tog_failed_modal();
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
                tog_failed_modal();
              }}
            >
              x
            </p>
          </div>
          <div
            className="bg-text rounded-lg shadow-lg p-6 md:w-[500px] w-[85%] text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {fromGetUpdates ? (
              <p className="text-white">{t("common.updates_sended")}</p>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4 text-white pt-2">
                  {t("common.previous_login")}
                </h2>
                <p className="text-xl text-white mt-2">
                  {t("common.previous_login_content")}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FailedModal;
