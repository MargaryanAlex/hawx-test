import "./style.scss";
import jsonFile from "src/i18n/locales/eng/translations.json";
import {useTranslation} from "react-i18next";
import logo from "src/assets/img/solutions/financial.png";
import {useEffect, useRef, useState} from "react";
import img1 from "src/assets/img/solutions/financical/Group1.png";
import img2 from "src/assets/img/solutions/financical/Group2.png";
import img3 from "src/assets/img/solutions/financical/Group3.png";
import Animation from "../../components/animation";
import Slider from "react-slick";
import SolutionsLayout from "src/layout/solutionsLayout";

const imgs = [img1, img2, img3];
const Financial = () => {
    const [loader, setLoader] = useState<boolean>(true)

    const settings = {
        customPaging: function (i: number) {
            return (
                <div
                    className={`G-solution-tab P-financial-border `}
                >
                    <p>{t(`solutions.financial.tab${i}.title`)}</p>
                </div>
            );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,

        slidesToScroll: 1
    };
    let title = useRef<HTMLDivElement | null>(null)
    let content = useRef<HTMLDivElement | null>(null)


    const {t} = useTranslation();
    useEffect(() => {
        setLoader(false)
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);
    return (
        <SolutionsLayout >

            <div className="G-solution P-financial">
                <div className="G-solution-header P-financial-header " ref={title}>
                    <Animation element={title}>
                        <div className="G-container">
                            <div>
                                <h3>{t("Control_Financials-text")}</h3>
                                <p>{t("HawX_is_ready-text")}</p>
                            </div>
                            <img src={logo} alt="logo"/>
                        </div>
                    </Animation>
                </div>
                <div ref={content}/>
                <Slider {...settings} >
                    {Object.values(
                        jsonFile.solutions.financial
                    ).map((element, elementIndex) => {
                        return (
                            <div className="G-container"
                                 key={`${jsonFile.solutions.financial[`tab${elementIndex}` as keyof typeof jsonFile.solutions.financial
                                     ].title}`}>
                                <Animation element={content}>

                                    <div className="G-solution-body">
                                        <div className="G-img-container">
                                            <img src={imgs[elementIndex]} alt="logo"/>
                                        </div>
                                        <div className=" G-solution-body-text">
                                            <h2>{t(`solutions.financial.tab${elementIndex}.title`)}</h2>
                                            {Object.values(
                                                jsonFile.solutions.financial[
                                                    `tab${elementIndex}` as keyof typeof jsonFile.solutions.financial
                                                    ].text
                                            ).map((item, index) => {
                                                return (
                                                    <div key={item.title + index}>
                                                        {item.title.length > 0 && (
                                                            <h3>
                                                                {t(
                                                                    `solutions.financial.tab${elementIndex}.text.text${index}.title`
                                                                )}
                                                            </h3>
                                                        )}
                                                        {item.content.length > 0 && (
                                                            <p>
                                                                {t(
                                                                    `solutions.financial.tab${elementIndex}.text.text${index}.content`
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Animation>
                            </div>

                        )
                    })}
                </Slider>
            </div>
        </SolutionsLayout>
    );
};

export default Financial;
