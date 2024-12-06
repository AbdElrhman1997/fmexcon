import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegistrationForm = ({ fromRegister }) => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    company: "",
    job_title: "",
    website_url: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("registrationForm.invalidEmail"))
      .required(t("registrationForm.emailRequired")),
    first_name: Yup.string().required(t("registrationForm.firstNameRequired")),
    last_name: Yup.string().required(t("registrationForm.lastNameRequired")),
    company: Yup.string().required(t("registrationForm.companyRequired")),
    job_title: Yup.string().required(t("registrationForm.jobTitleRequired")),
    phone: Yup.string().required(t("registrationForm.phoneRequired")),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Replace this URL with your API endpoint
    await axios
      .post("https://admin.fmexcon.com/api/sponsorRegisterStore", values)
      .then(() => {
        toast.success(t("common.submit_success"));
        // nav(`/${i18n.language}/conditions`);
        resetForm();
      })
      .catch(() => {
        toast.error(t("common.submit_error"));
        throw new Error("Unexpected response");
      });
  };

  return (
    <div
      className={`col-span-12 mb-6 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="w-full max-w-2xl mx-auto p-4">
            <div className="flex flex-col mb-4">
              <label>
                {t("registrationForm.email")}
                <span className="text-red-700 text-xl">*</span>
              </label>
              <Field
                name="email"
                type="email"
                placeholder={t("registrationForm.emailPlaceholder")}
                className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label>
                  {t("registrationForm.firstName")}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <Field
                  name="first_name"
                  placeholder={t("registrationForm.firstNamePlaceholder")}
                  className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label>
                  {t("registrationForm.lastName")}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <Field
                  name="last_name"
                  placeholder={t("registrationForm.lastNamePlaceholder")}
                  className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label>
                  {t("registrationForm.company")}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <Field
                  name="company"
                  placeholder={t("registrationForm.companyPlaceholder")}
                  className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label>
                  {t("registrationForm.jobTitle")}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <Field
                  name="job_title"
                  placeholder={t("registrationForm.jobTitlePlaceholder")}
                  className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
                />
                <ErrorMessage
                  name="job_title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
              dir={i18n.language == "en" ? "ltr" : "rtl"}
            >
              <div className="flex flex-col">
                <label>{t("registrationForm.websiteUrl")}</label>
                <Field
                  name="website_url"
                  placeholder={t("registrationForm.websiteUrlPlaceholder")}
                  className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
                />
              </div>

              <div className="flex flex-col" dir="rtl">
                <label>
                  {t("registrationForm.phone")}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <PhoneInput
                  country="sa"
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    className:
                      "border-[1.5px] px-2 py-[9px]  w-full bg-white bg-gray-100 rounded-lg border border-gray-200 phone-input-handle",
                    placeholder: t("registrationForm.phone"),
                  }}
                  dropdownClass="custom-phone-dropdown"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label>{t("registrationForm.message")}</label>
              <Field
                as="textarea"
                name="message"
                placeholder={t("registrationForm.messagePlaceholder")}
                rows="4"
                className="w-full bg-gray-100 rounded-lg border border-gray-200 outline-none p-2"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#44add2] text-white rounded-lg hover:bg-[#319cc4] disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={fromRegister && true} // Set this to true or false based on your condition
                style={{ cursor: `${fromRegister && "not-allowed"}` }} // Changes the cursor to 'not-allowed'
              >
                {t("registrationForm.submit")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
