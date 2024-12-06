import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as Yup from "yup";

const GetNewUpdates = () => {
  const { t, i18n } = useTranslation();

  let validateSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
  });

  const handleSave = async (values) => {
    try {
      await validateSchema.validate(values, { abortEarly: false });

      const valuesToSend = {
        email: values?.email,
      };

      axios.post("testapi/getnew", valuesToSend).then((res) => {
        if (res && res.status) {
          toast.success(res?.message, {
            position: "top-center",
            hideProgressBar: false,
            autoClose: 3000,
            progress: undefined,
          });
          // add to local storage
        } else {
          toast.error(res?.message, {
            position: "top-center",
            hideProgressBar: false,
            autoClose: 3000,
            progress: undefined,
          });
        }
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
      } else {
      }
    }
  };

  return (
    <section
      className="px-4 w-full"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <p
        className="text-2xl mb-8 text-center"
        style={{ color: "rgb(68, 173, 210)", fontWeight: "bold" }}
      >
        {t("getUpdates.title")}
      </p>
      <div
        className="rounded-2xl lg:py-4 py-2 lg:px-10 px-6 w-fit mx-auto mb-16 md:pb-2 pb-6"
        style={{ backgroundColor: "rgb(246, 245, 245)" }}
      >
        <form
          action="#"
          className="flex justify-center items-center flex-wrap gap-x-4 pt-4 xl:pb-4 lg:pb-4 md:pb-4 pb-0"
        >
          <div className="xl:w-96 lg:w-96 md:w-72 w-full">
            <input
              name="email"
              type="email"
              placeholder={t("getUpdates.placeholder")}
              required
              className="text-right rounded-xl border-none py-4 px-4 lg:mt-0 md:mt-0 mt-4 w-full"
              style={{ margin: 0 }}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-12 lg:w-fit md:w-fit w-full rounded-xl text-white font-bold xl:mt-0 lg:mt-0 md:mt-0 mt-4 bg-[#44add2] hover:bg-[#319cc4]"
          >
            {t("getUpdates.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetNewUpdates;
