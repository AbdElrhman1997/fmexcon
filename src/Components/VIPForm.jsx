import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SuccessModal from "./SuccessModal";
import FailedModal from "./FailedModal";
import countriesData from "../assets/countries.json";
import sectorsData from "../assets/sectors.json";
import { useState } from "react";

const VIPForm = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  const [successModal, setSuccessModal] = useState(false);
  const [failedModal, setFailedModal] = useState(false);
  const [policyModal, setPolicyModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const tog_modal = () => {
    setSuccessModal(!successModal);
    return successModal;
  };

  const tog_failed_modal = () => {
    setFailedModal(!failedModal);
    return failedModal;
  };

  const tog_policy_modal = () => {
    setPolicyModal(!policyModal);
    return policyModal;
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    job_title: "",
    company: "",
    message: "",
    // ...(!isExhibitor ? {} : { website_url: "" }),
    // ...(!isExhibitor ? {} : { country: "" }),
    // ...(!isExhibitor ? {} : { city: "" }),
    // ...(!isExhibitor ? {} : { sex: "" }),
    // ...(!isExhibitor ? {} : { sector: "" }),
  };

  const countryOptions = countriesData.map((country) => ({
    value: country.name,
    label: i18n.language == "en" ? country.en : country.ar,
  }));

  const genderOptions = [
    {
      value: "male",
      label: i18n.language == "en" ? "male" : "ذكر",
    },
    {
      value: "female",
      label: i18n.language == "en" ? "female" : "أنثى",
    },
  ];

  const sectorOptions = sectorsData.map((sector) => ({
    value: sector.value,
    label: i18n.language == "en" ? sector.en : sector.ar,
  }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleGenderChange = (selectedOption) => {
    setSelectedGender(selectedOption);
  };

  const handleSectorChange = (selectedOption) => {
    setSelectedSector(selectedOption);
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(t("registrationForm.firstNameRequired")),
    last_name: Yup.string().required(t("registrationForm.lastNameRequired")),
    email: Yup.string()
      .email(t("registrationForm.invalidEmail"))
      .required(t("registrationForm.emailRequired")),
    phone: Yup.string()
      .required(t("registrationForm.phoneRequired"))
      .test(
        "valid-saudi-phone",
        t("registrationForm.phoneTooShort"),
        (value) => {
          if (!value) return false;
          // إزالة أي شيء غير رقمي
          const digits = value.replace(/\D/g, "");
          // لازم يبدأ بـ 966
          // if (!digits.startsWith("966")) return false;
          // عدد الأرقام بعد 966 لازم يكون 9 أو أكثر
          const localNumber = digits.slice(3); // بعد أول 3 أرقام (كود الدولة)
          return localNumber.length >= 9;
        }
      ),
    job_title: Yup.string().required(t("registrationForm.jobTitleRequired")),
    company: Yup.string().required(t("registrationForm.companyRequired")),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const url = "https://admin.fmexcon.com/api/vipRegisterStore";

    await axios
      .post(url, {
        ...values,
        phone: `+${values?.phone}`,
        country: selectedCountry?.label,
        gender: selectedGender?.label,
        sector: selectedSector?.label,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccessModal(true);
          resetForm();
        } else {
          setFailedModal(true);
          resetForm();
        }
        resetForm();
      })
      .catch(() => {
        toast.error(t("common.submit_error"));
        throw new Error("Unexpected response");
      });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#e5e7eb",
      borderRadius: "8px",
      padding: "1.5px",
      boxShadow: "none",
      fontWeight: "600",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#013047a8",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#013047" : "white",
      color: state.isSelected ? "white" : "#013047",
      "&:hover": {
        backgroundColor: "#013047",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
  };

  return (
    <div
      className={`container mx-auto my-12 ${
        i18n.language === "en" ? "text-left" : "text-right"
      }`}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="mb-9 mt-12 md:text-4xl text-3xl text-text font-bold text-center">
        {t("common.vip_register")}
      </div>

      <SuccessModal tog_modal={tog_modal} successModal={successModal} />
      <FailedModal
        tog_failed_modal={tog_failed_modal}
        failedModal={failedModal}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, setFieldValues }) => (
          <Form className="w-full mx-auto relative">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <Field
                    name="first_name"
                    placeholder={t("registrationForm.firstNamePlaceholder")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <Field
                    name="last_name"
                    placeholder={t("registrationForm.lastNamePlaceholder")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder={t("registrationForm.emailPlaceholder")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col" dir="rtl">
                  <PhoneInput
                    country="sa"
                    value={values.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    inputProps={{
                      name: "phone",
                      id: "phone",
                      className:
                        "border-[1.5px] px-2 py-[9px]  w-full bg-white  rounded-lg border border-gray-200 phone-input-handle",
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <Field
                    name="job_title"
                    placeholder={t("registrationForm.jobTitlePlaceholder")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="job_title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    name="company"
                    placeholder={t("registrationForm.companyPlaceholder")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <Select
                    options={genderOptions}
                    onChange={handleGenderChange}
                    placeholder={t("registrationForm.gender")}
                    isSearchable
                    styles={customStyles}
                    className="w-full mx-auto py-[1px]"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <Select
                    options={sectorOptions}
                    onChange={handleSectorChange}
                    placeholder={t("registrationForm.sector")}
                    isSearchable
                    styles={customStyles}
                    className="w-full mx-auto py-[1px]"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <Select
                    options={countryOptions}
                    onChange={handleCountryChange}
                    placeholder={t("registrationForm.country")}
                    isSearchable
                    styles={customStyles}
                    className="w-full mx-auto py-[1px]"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    name="city"
                    placeholder={t("registrationForm.city")}
                    className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <Field
                  as="textarea"
                  name="message"
                  placeholder={t("registrationForm.messagePlaceholder")}
                  rows="4"
                  className="w-full bg-white rounded-lg border border-gray-200 outline-none p-2 placeholder:text-[#013047a8] font-semibold"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="tracking-wide cursor-pointer"
                  required
                />
                <span className="mx-[6px] tracking-normal">
                  {t("registrationForm.accept")}
                </span>{" "}
                <div
                  onClick={tog_policy_modal}
                  className="text-text underline tracking-normal cursor-pointer"
                >
                  {t("registrationForm.terms")}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-text hover:bg-text_hover text-white rounded-lg"
                >
                  {t("registrationForm.submit")}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VIPForm;
