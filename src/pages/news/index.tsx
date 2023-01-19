import {useTranslation} from "react-i18next";
import NewsCard from "src/components/newsCard";
import "./style.scss";
import jsonFile from "src/i18n/locales/eng/translations.json";
import {useEffect, useRef, useState} from "react";
import Animation from "../../components/animation";

const News = () => {
    const {t} = useTranslation();
    let container = useRef<HTMLDivElement | null>(null)
    let newsContainer = useRef<HTMLDivElement | null>(null)
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [count, setCount] = useState<number>(4);
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);
    useEffect(() => {
        window.addEventListener("resize", (e: Event) => {
            setWidth(window.innerWidth);
        });
        window.addEventListener("scroll", (e: any) => {
            if (
                e.target.scrollingElement.scrollHeight -
                e.target.scrollingElement.clientHeight -
                e.target.scrollingElement.scrollWidth <
                e.target.scrollingElement.scrollTop
            ) {
                setCount(count + 4);
            }
        });
        return () => {
            window.removeEventListener("resize", (e: Event) => {
            });
            window.removeEventListener("scroll", (e: Event) => {
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="P-news" ref={container}>
            <Animation element={container}>
                <div className="G-container">
                    <h2>{t("Explore_Blogs-text")}</h2>
                    <p>{t("Find_out-text")}</p>
                    <p>{t("Keep_updated-text")}</p>
                    <h3>{t("LASTEST-text")}</h3>
                    <div className="P-news-container" ref={newsContainer}>

                        {Object.values(jsonFile.news).map((item, index) => {
                            if (width > 582 || index < count) {
                                return (
                                    <div className="P-card" key={index}>
                                        <Animation element={newsContainer}>

                                            <NewsCard
                                                img={item.img}
                                                title={t(`news.news${index}.newsTitle`)}
                                                content={t(`news.news${index}.newsContent`)}
                                                link={item.link}
                                            />
                                        </Animation>

                                    </div>
                                )
                                    ;
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </Animation>
        </div>
    );
};

export default News;
