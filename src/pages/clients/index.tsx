import {useTranslation} from "react-i18next";
// import { clientsLogos } from "src/components/clientsSection";
// import sorsx from "src/assets/img/clientsLogo/sorsx.png";
// import spacebet from "src/assets/img/clientsLogo/spacebet.svg";
// import betbet from "src/assets/img/clientsLogo/betbet.svg";
// import quickbet from "src/assets/img/clientsLogo/quickbet.svg";
// import gamblecity from "src/assets/img/clientsLogo/gamblecity.svg";
// import boomtotal from "src/assets/img/clientsLogo/boomtotal.svg";
// import fortunabet from "src/assets/img/clientsLogo/fortunabet.svg";
// import megagoal from "src/assets/img/clientsLogo/megagoal.svg";
// import sevnbet from "src/assets/img/clientsLogo/sevnbet.svg";
// import fortunetowin from "src/assets/img/clientsLogo/fortunetowin.svg";
// import lcukybet from "src/assets/img/clientsLogo/lcukybet.svg";
// import megabet from "src/assets/img/clientsLogo/megabet.svg";
// import transwayz from "src/assets/img/clientsLogo/transwayz.svg";
import map from "src/assets/img/clientsLogo/map.png";
import "./style.scss";
import {Fragment, useEffect, useRef} from "react";
import Animation from "../../components/animation";

// const logos = [
//   sorsx,
//   spacebet,
//   betbet,
//   quickbet,
//   gamblecity,
//   boomtotal,
//   fortunabet,
//   megagoal,
//   sevnbet,
//   fortunetowin,
//   lcukybet,
//   megabet,
//   transwayz,
// ];
const countries = [
    "UK",
    "Canada",
    "Norway",
    "Finland",
    "Portugal",
    "Netherlands",
    "Brazil",
    "India",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Philippines",
    "South Korea",
    "Turkey",
    "Morocco",
    "Nigeria",
    "Ukraine",
    "Kazakhstan",
    "Uzbekistan",
    "Belarus",
    "Armenia"
];
const Clients = () => {
    const title = useRef<HTMLDivElement | null>(null)
    const world = useRef<HTMLDivElement | null>(null)
    const partners = useRef<HTMLDivElement | null>(null)
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);
    return (
        <div className="P-clients">
            <div className="G-container P-clients-top " ref={title}>
                <Animation element={title}>
                    <h2>{t("Companies_That-text")}</h2>
                    <p>{t("While_being_on_the_market-text")}</p>
                </Animation>
            </div>
            {/* <div className="P-clients-logos G-container ">
        <h3>{t("Clients-text")}</h3>
        <div className="P-clients-logos-container G-flex-wrap G-justify-center G-align-center">
          {clientsLogos.map((item, index) => {
            return (
              <div key={item + index}>
                <img src={item} alt="logo" />
              </div>
            );
          })}
          {logos.map((item, index) => {
            return (
              <div key={item + index}>
                <img src={item} alt="logo" />
              </div>
            );
          })}
          <span>{t("And_More-text")}</span>
        </div>
      </div> */}
            <div className="P-clients-map" ref={world}>
                <Animation element={world}>
                    <h3>{t("Countries_Around-text")}</h3>
                    <div className="P-clients-map-container">
                        <div className="G-container">
                            {" "}
                            <img src={map} alt="map"/>
                        </div>
                    </div>
                </Animation>
                <div
                    className="G-container"
                    style={{
                        overflow: "hidden",
                    }}
                    ref={partners}
                >
                    <Animation element={partners}>
                        <div className="G-flex-wrap P-countries G-justify-between">
                            {countries.map((item, index) => (
                                <Fragment key={index + item}>
                                    <p key={item + index}>{item}</p>
                                    {index !== countries.length - 1 ? (
                                        <div className="P-horizontal-divider" key={index}/>
                                    ) : null}
                                </Fragment>
                            ))}
                        </div>
                    </Animation>
                </div>
            </div>
        </div>
    );
};

export default Clients;
