import "./style.scss";
import { useTranslation } from "react-i18next";
import fb from "src/assets/img/aboutUs/Facebook.svg";
import inst from "src/assets/img/aboutUs/Instagram.svg";
import linkedin from "src/assets/img/aboutUs/Linkedin.svg";
import { useEffect } from "react";
const Contacts = () => {
  const { t } = useTranslation();
  const goTo: (url: string) => void = (url) => {
    (window.open(url, "_blank") as Window).focus();
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <div className="P-contacts ">
      <div className="G-container">
        <h2>{t("Contact-text")}</h2>
        <h3>{t("We_Are_Here-text")}</h3>
        <p>{t("Ready_to_help-text")}</p>
      </div>
      <div className="P-divider" />
      <div className="G-container">
        <h3>{t("Lets_Get_Started-text")}</h3>
        <p>{t("Don't_hesitate-text")}</p>
        <p>
          {t("Or_send-text")}{" "}
          <span
            onClick={() => {
              window.location = "mailto:info@hawx.io" as (string | Location) &
                Location;

              navigator.clipboard.writeText("info@hawx.io ");
            }}
          >
            info@hawx.io
          </span>{" "}
          {t("and_our_professional-text")}
        </p>
        <h4>{t("FOLLOW-text")}</h4>
        <div className="G-flex P-icons">
          <img
            src={fb}
            alt="facebook"
            onClick={() => {
              goTo("https://www.facebook.com/HawX.io");
            }}
          />
          <img
            src={linkedin}
            alt="linkedin"
            onClick={() => {
              goTo("https://www.linkedin.com/company/hawx/");
            }}
          />
          <img
            src={inst}
            alt="instagram"
            onClick={() => {
              goTo("https://www.instagram.com/hawx.io/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
