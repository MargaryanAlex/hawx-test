import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
// import ClintsSection from "src/components/clientsSection";
import NewsSection from "src/components/newsSection";
import {solutionsList} from "src/router";
import "./style.scss";
import Animation from "src/components/animation"
import Calculation from "src/components/animation/calculation";

const Home = () => {
    const div = useRef<HTMLDivElement | null>(null);
    const title = useRef<HTMLDivElement | null>(null)
    const solutions = useRef<HTMLDivElement | null>(null)
    const blueArea = useRef<HTMLDivElement | null>(null)
    const blueContent = useRef<HTMLDivElement | null>(null)
    const cards = useRef<HTMLDivElement | null>(null)


    const {t} = useTranslation();
    const [width, setWidth] = useState(window.innerWidth);
    const [cardWidth, setCardWidth] = useState<number | undefined>();


    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        window.addEventListener("resize", (e: Event) => {
            setWidth(window.innerWidth);
        });
        setCardWidth(div.current?.clientWidth);
    }, []);
    useEffect(() => {

        setCardWidth(div.current?.clientWidth);
    }, [width]);

    return (
        <div className="P-homepage">
            <div className="G-container P-title" ref={title}>
                <Animation element={title}>

                    <div className="P-container">

                        <h2 className={`title`}>{t("Ultimate-text")}</h2>
                        <div className="P-container">
                            <span>{t("Delivering-text")}</span>
                        </div>

                    </div>

                </Animation>
            </div>

            <div className="P-solutions" ref={solutions}>
                <Animation element={solutions}>

                    <div className="G-container">
                        {" "}
                        <h5>{t("Our_Solutions-text")}</h5>
                    </div>
                </Animation>
                <div className="P-solutions-list">
                    <div className="G-container">

                        <div className="P-solutions-container">
                            {solutionsList.map((item) => {
                                return (

                                    <NavLink
                                        to={item.path as string}
                                        key={item.path}
                                        className="P-solution"
                                    >
                                        <Animation element={solutions}>

                                            <div
                                                className="P-solution-logo"
                                                ref={div}
                                                style={{
                                                    background: item.color,
                                                    width: "100%",
                                                    height: "auto",
                                                    aspectRatio: 1
                                                }}
                                            >
                                                <img src={item.icon} alt="logo"/>
                                            </div>
                                            <p>{t(item.title)}</p>
                                        </Animation>

                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* <ClintsSection /> */}
            <div className="P-section G-align-center G-flex-column">
                <div className="P-blue-area" ref={blueArea}>
                    <Animation element={blueArea}>
                        <h4>{t("HawX_Standout-text")}</h4>
                    </Animation>
                    <div className="G-container" ref={blueContent}>
                        <Animation element={blueContent}>

                            <div className="P-container">
                                <p>{t("MANAGING-text")}</p>
                                <div className="P-counts G-justify-between">
                                    <div>
                                        <h5><Calculation number={30} element={blueContent}/>+</h5>
                                        <p>{t("Markets-text")}</p>
                                    </div>
                                    <div>
                                        <h5><Calculation number={85} element={blueContent}/>+</h5>
                                        <p>{t("Employees-text")}</p>
                                    </div>
                                    <div>
                                        <h5><Calculation number={3} element={blueContent}/></h5>
                                        <p>{t("Offices-text")}</p>
                                    </div>
                                    <div>
                                        <h5><Calculation number={25} element={blueContent}/>+</h5>
                                        <p>{t("Clients-text")}</p>
                                    </div>
                                </div>
                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
            <div className="P-section G-align-center G-flex-column">
                <Animation element={cards}>

                    <h4 className="G-container">{t("Brand_Way-text")}</h4>
                </Animation>
                <div className="P-gray-area">
                    <div className="G-container">
                        <div className=" G-flex-wrap  G-justify-center P-flex-area" ref={cards}>
                            <div className="P-card">
                                <Animation element={cards}>

                                    <h5>{t("Perfect_Strategy-text")}</h5>
                                    <p>{t("Based_on_research-text")}</p>
                                </Animation>

                            </div>
                            <div className="P-card">
                                <Animation element={cards}>
                                    <h5>{t("Innovative_Ideas-text")}</h5>
                                    <p>{t("The_digital_world-text")}</p>
                                </Animation>
                            </div>
                            <div className="P-card">
                                <Animation element={cards}>
                                    <h5>{t("Targeted_Results-text")}</h5>
                                    <p>{t("We_make_your_success-text")}</p>
                                </Animation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <NewsSection/>
            </div>
        </div>
    );
};

export default Home;
