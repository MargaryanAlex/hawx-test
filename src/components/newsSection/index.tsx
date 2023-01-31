import NewsCard from "../newsCard";
import "./style.scss";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {RouteNames} from "src/router";
import Slider from "react-slick";
import next from "../../assets/img/mentions/next.png";
import prev from "../../assets/img/mentions/prev.png";
import {useContext, useEffect, useRef, useState} from "react";
import Animation from "../animation";
import axios from "axios"
import {INewsModel} from "src/models/news.model";
import {LanguageContext} from "../../context/language-context";


function SampleNextArrow(props: any) {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={next} alt="next"/>
        </div>
    );
}

function SamplePrevArrow({...props}: any) {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={prev} alt="previus"/>
        </div>
    );
}

const NewsSection = () => {
    const {t} = useTranslation();
    const news = useRef<HTMLDivElement | null>(null)
    const [data, setData] = useState<INewsModel[]>([])
    const language = useContext(LanguageContext)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        swipeToSlide: true,
        swipe: true,
        scroll: true,
        responsive: [
            {
                breakpoint: 1208,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 671,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,

                },
            },
        ],
    };


    useEffect(() => {
        axios.get("http://localhost:5000/news", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }).then((res) => {
            console.log(res.data)
            setData([...res.data])
            res.data.map((item: INewsModel) => {

            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className="P-NewsSection" ref={news}>
            <Animation element={news}>

                <div className="G-container G-align-center G-flex-column P-lastNews">
                    <h4>{t("LASTEST-text")}</h4>
                    <div className="G-container ">

                        <Slider {...settings}>

                            {data.sort((a, b) => a.order - b.order).map((item, index) => {
                                if (index < 10) {
                                    return (
                                        <div className="P-card" key={index}>
                                            <NewsCard
                                                img={item.smallThumbnail}
                                                title={item.newsTitle[language.language]}
                                                content={item.newsContent[language.language]}
                                                link={item.link ? item.link : null}
                                            />
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </Slider>
                    </div>
                    <button>
                        <NavLink to={RouteNames.NEWS}>{t("SEE_ALL-text")}</NavLink>
                    </button>
                </div>
            </Animation>
            {/* <div className="P-slider-header">
        <h5>{t("Trusted-text")}</h5>
        <p>{t("We_work-text")}</p>
      </div>
      <div className="P-slider-section">
        <div className="G-container ">
          <MentionSection />
        </div>
      </div>*/}
        </div>
    );
};

export default NewsSection;
