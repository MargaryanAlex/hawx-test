import "./style.scss";
import {useTranslation} from "react-i18next";
import fb from "src/assets/img/aboutUs/Facebook.svg";
import inst from "src/assets/img/aboutUs/Instagram.svg";
import linkedin from "src/assets/img/aboutUs/Linkedin.svg";
import natia from "src/assets/img/aboutUs/5U1A0019.jpg";
import gela from "src/assets/img/aboutUs/5U1A0070.jpg";
import gt from "src/assets/img/aboutUs/5U1A0086-copy.jpg";
import gs from "src/assets/img/aboutUs/IMG_4169.jpg";
import beka from "src/assets/img/aboutUs/5U1A9994.jpg";
import misho from "src/assets/img/aboutUs/misho.jpg";
import nadusa from "src/assets/img/aboutUs/nadusa.jpg";
import rafael from "src/assets/img/aboutUs/rafael.jpg";
import avo from "src/assets/img/aboutUs/avo.png";
import vov from "src/assets/img/aboutUs/vov.png";
import {useEffect, useRef} from "react";
import Animation from "../../components/animation";
import Calculation from "../../components/animation/calculation";

const leadership = [
    {
        img: gt,
        name: "Giorgi_Tsutskiridze-text",
        role: "Co-Founder_&_Chief_Executive_Officer-text",
    },
    {
        img: gs,
        name: "Giorgi_Samkharadze-text",
        role: "Co-Founder_&_Chief_Operating_Officer-text",
    },

    {
        img: rafael,
        name: "Rafael_Gyulnazaryan-text",
        role: "Co-Founder_&_Chief_Technology_Officer-text",
    },
    {
        img: gela,
        name: "Gela_Makharadze-text",
        role: "Chief_Financial_Officer-text",
    },
    {
        img: beka,
        name: "Beka_Chikobava-text",
        role: "Head_of_CRM-text",
    },
    {
        img: natia,
        name: "Natia_Zedelashvili-text",
        role: "Head_of_Design-text",
    },
    {
        img: nadusa,
        name: "Giorgi_Nadaraia-text",
        role: "Head_of_Marketing-text",
    },
    {
        img: misho,
        name: "Mikheil_Gogitashvili-text",
        role: "Head_of_Products-text",
    },
    {
        img: vov,
        name: "Vova_Sardanyan-text",
        role: "Head_of_Project_Management-text",
    },
    {
        img: avo,
        name: "Avetik_Hasasyan-text",
        role: "Tech_Guru-text",
    },
];
const AboutUs = () => {
    let container = useRef<HTMLDivElement | null>(null)
    let calc = useRef<HTMLDivElement | null>(null)
    const {t} = useTranslation();
    const goTo: (url: string) => void = (url) => {
        (window.open(url, "_blank") as Window).focus();
    };
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);
    return (
        <div className="P-about-us">
            <div className="P-about-us-text G-flex-wrap G-container" ref={container}>
                <div className="P-about-card">
                    <Animation element={container}>

                        <h3>{t("Company-text")}</h3>
                        <p>{t("While_being-text")}</p>
                        <span>{t("FOLLOW-text")}</span>
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
                    </Animation>

                </div>
                <div className="P-about-card">
                    <Animation element={container}>

                        <h3>{t("Who_We_Are-text")}</h3>
                        <p>{t("Our_vision-text")}</p>
                        <p>{t("Our_mission-text")}</p>
                    </Animation>
                </div>
                <div className="P-about-card">
                    <Animation element={container}>

                        <h3>{t("HawX_Standout-text")}</h3>
                        <p>{t("Managing_an_online-text")}</p>
                        <div className="P-numbers G-flex" ref={calc}>
                            <div>
                                <p><Calculation number={30} element={calc}/>+</p>
                                <span>{t("Markets-text")}</span>
                            </div>
                            <div>
                                <p><Calculation number={85} element={calc}/>+</p>
                                <span>{t("Employees-text")}</span>
                            </div>
                            <div>
                                <p><Calculation number={3} element={calc}/></p>
                                <span>{t("Offices-text")}</span>
                            </div>
                            <div>
                                <p><Calculation number={25} element={calc}/>+</p>
                                <span>{t("Clients-text")}</span>
                            </div>
                        </div>
                    </Animation>
                </div>
                <div className="P-about-card">
                    <Animation element={container}>

                        <h3>{t("The_Team-text")}</h3>
                        <p>{t("HawX_i_a_team-text")}</p>
                        <p>{t("Delivering_a_personal-text")}</p>
                    </Animation>
                </div>
            </div>
            {/* <div className="P-photos G-container">
        <h2>{t("Leadership_&_Management-text")}</h2>
        <div className="P-container">
          {leadership.map((item, index) => {
            return (
              <div className="P-photo-card" key={item.name + index}>
                <div className="P-photo">
                  <img src={item.img} alt="pic" />
                </div>
                <h4>{t(item.name)}</h4>
                <p>{t(item.role)}</p>
              </div>
            );
          })}
        </div>
      </div> */}
        </div>
    );
};

export default AboutUs;
