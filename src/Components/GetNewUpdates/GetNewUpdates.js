import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import * as Yup from "yup";
import SuccessModal from "../SuccessModal";
import FailedModal from "../FailedModal";

const GetNewUpdates = () => {
  const { t, i18n } = useTranslation();
  const [successModal, setSuccessModal] = useState(false);
  const [failedModal, setFailedModal] = useState(false);

  const initialValues = {
    email: "",
  };

  const handleSave = async (values) => {
    try {
      axios
        .post("https://admin.fmexcon.com/api/store-userEmail", values)
        .then((res) => {
          setFailedModal(true);
        });
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
    }
  };

  const tog_modal = () => {
    setSuccessModal(!successModal);
    return successModal;
  };

  const tog_failed_modal = () => {
    setFailedModal(!failedModal);
    return failedModal;
  };

  return (
    <section className="w-full mb-12 container mx-auto" dir={"rtl"}>
      <SuccessModal
        tog_modal={tog_modal}
        successModal={successModal}
        fromGetUpdates={true}
      />
      <FailedModal
        tog_failed_modal={tog_failed_modal}
        failedModal={failedModal}
        fromGetUpdates={true}
      />
      <div className="lg:flex justify-between items-center">
        <p className="lg:text-3xl text-2xl text-center font-bold text-text">
          {t("getUpdates.title")}
        </p>
        <div className="rounded-2xl py-2 md:pb-2 pb-6 bg-[#E6E6E6] flex justify-center items-center lg:mt-0 mt-8 lg:w-fit">
          <Formik initialValues={initialValues} onSubmit={handleSave}>
            {({ setFieldValue, values, handleChange }) => (
              <Form className="flex justify-center items-center pt-4 px-4 xl:pb-4 lg:pb-4 md:pb-4 pb-0 lg:w-fit w-full">
                <div className="lg:w-96 w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder={t("getUpdates.placeholder")}
                    required
                    value={values.email}
                    onChange={handleChange}
                    className="text-right rounded-tr-xl rounded-br-xl border-none py-4 px-4 w-full"
                    style={{ margin: 0 }}
                  />
                </div>
                <button
                  type="submit"
                  className="py-4 lg:px-12 px-6 lg:w-fit md:w-fit   rounded-tl-xl rounded-bl-xl text-white font-bold bg-[#28A4A8] hover:bg-[#218e92]"
                  onClick={handleSave}
                >
                  {t("getUpdates.submit")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default GetNewUpdates;
