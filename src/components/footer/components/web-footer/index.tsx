import logo from "../../../../assets/img/footer/logo.svg";
import fb from "../../../../assets/img/footer/fb.svg";
import linkdin from "../../../../assets/img/footer/linkedin.svg";
import insta from "../../../../assets/img/footer/instagram.svg";
import {companyList, solutionsList} from "../../../../router";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useFooter from "../../useFooter";

const WebFooter = () => {
    const {t} = useTranslation();
    const {goTo} = useFooter()

    return (<div className="P-footer-nav P-web">
        <div className="G-container">
            <div className="P-footer-logo">
                <img src={logo} alt="logo" className="logo"/>
                <div className="P-social-icons">
                    <p>{t("FOLLOW-text")}</p>
                    <div className="P-icons">
                        <img
                            src={fb}
                            alt="Facebook"
                            onClick={() => {
                                goTo("https://www.facebook.com/HawX.io");
                            }}
                        />
                        <img
                            src={linkdin}
                            alt="Linkdin"
                            onClick={() => {
                                goTo("https://www.linkedin.com/company/hawx/");
                            }}
                        />
                        <img
                            src={insta}
                            alt="Instagram"
                            onClick={() => {
                                goTo("https://www.instagram.com/hawx.io/");
                            }}
                        />
                    </div>
                </div>
                <span>
              {" "}
                    © {new Date().getFullYear()} {t("copyright")}{" "}
            </span>
            </div>
            <div className="P-footer-navigation">
                <div className="P-sections">
                    <h4>{t("Company-text")}</h4>
                    {companyList.map((item, index) => {
                        return (
                            <NavLink to={item.path as string} key={item.title + index}>
                                {t(item.title)}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="P-sections">
                    <h4>{t("Solutions-text")}</h4>
                    {solutionsList.map((item, index) => {
                        return (
                            <NavLink to={item.path as string} key={item.title + index}>
                                {t(item.title)}
                            </NavLink>
                        );
                    })}
                </div>
                {/* <div className="P-sections">
              <h4>{t("LEGAL-text")}</h4>
              {legalList.map((item, index) => {
                return (
                  <NavLink to={item.path as string} key={item.title + index}>
                    {t(item.title)}
                  </NavLink>
                );
              })}
            </div> */}
            </div>
        </div>
    </div>)
}

export default WebFooter