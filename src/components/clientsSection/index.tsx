import "./style.scss";
import { useTranslation } from "react-i18next";
import betconstruct from "src/assets/img/clientsLogo/betconstruct.svg";
import kings from "src/assets/img/clientsLogo/7kings.svg";
import astra from "src/assets/img/clientsLogo/astra.svg";
import bet90 from "src/assets/img/clientsLogo/bet90.svg";
import betforward from "src/assets/img/clientsLogo/betforward.svg";
import betnomi from "src/assets/img/clientsLogo/betnomi.svg";
import ciwinz from "src/assets/img/clientsLogo/ciwinz.svg";
import gg from "src/assets/img/clientsLogo/gg.svg";
import jack998 from "src/assets/img/clientsLogo/jack998.svg";
import medina from "src/assets/img/clientsLogo/medina.svg";
import pnxbet from "src/assets/img/clientsLogo/pnxbet.svg";
import spinbooke from "src/assets/img/clientsLogo/spinbookie.svg";
import { NavLink } from "react-router-dom";
import { RouteNames } from "src/router";
export const clientsLogos = [
  betconstruct,
  pnxbet,
  betforward,
  ciwinz,
  jack998,
  gg,
  bet90,
  spinbooke,
  medina,
  astra,
  kings,
  betnomi,
];
const ClintsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="P-clientsSection">
      <p>{t("Clients-text")}</p>
      <div className="P-logos G-container">
        {clientsLogos.map((item, index) => {
          return (
            <div key={item + index}>
              <img src={item} alt="Logo" />
            </div>
          );
        })}
      </div>
      <button>
        <NavLink to={RouteNames.CLIENTS}>{t("VIEW_MORE-text")}</NavLink>
      </button>
    </div>
  );
};

export default ClintsSection;
