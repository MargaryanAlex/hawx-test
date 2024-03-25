import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import flagUK from "../../../../assets/img/header/Flag_UK.svg";
import flagPrt from "../../../../assets/img/header/Portugal.webp";
import flagRu from "../../../../assets/img/header/Flag_Ru.svg";
import {MutableRefObject, RefObject, useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../../context/language-context";
import {navList} from "../../../../router";
import {useLocation} from "react-router-dom";
import {ISelected} from "../../index";


const LanguageBar = ({
                         elementsRef,
                         setPosition
                     }: { elementsRef?: MutableRefObject<RefObject<unknown>[]>, setPosition?: (element: HTMLElement) => void }) => {
    const location = useLocation()
    const {i18n} = useTranslation();
    const options: ISelected[] = [
        {title: "PRT", icon: flagPrt, id: "br"},
        {title: "ENG", icon: flagUK, id: "eng"},
        {title: "РУС", icon: flagRu, id: "rus"},
    ];
    const [onHover, setOnHover] = useState<boolean>(false)
    const [selected, setSelected] = useState<ISelected | undefined>();
    const language = useContext(LanguageContext)

    const {t} = useTranslation()
    const checkRoute = () => {
        let index = navList.findIndex(item => location.pathname === item.path)

        if (index >= 0 && setPosition) {
            setTimeout(() => setPosition(elementsRef?.current[index].current as HTMLElement), 0)
        }
        let subIndex: number | undefined = undefined
        // eslint-disable-next-line
        navList.map((item, index) => {
            if (item.subList) {
                // eslint-disable-next-line
                item.subList.map(route => {
                    if (route.path === location.pathname) {
                        return subIndex = index
                    }

                })
            }
        })
        if (subIndex && subIndex >= 0 && setPosition) {
            setTimeout(() => setPosition(elementsRef?.current[subIndex as number].current as HTMLElement), 0)

        }
    }

    useEffect(() => {
        const currentLanguage: ISelected = localStorage.getItem("current_language")
            ? options.filter(
                (item) => item.id === localStorage.getItem("current_language")
            )[0]
            : {
                title: "ENG",
                icon: flagUK,
                id: "eng",
            }

        languageChanger(currentLanguage)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {

        (async () => {

            await i18n.changeLanguage(selected?.id);
            checkRoute()
            document.documentElement.setAttribute("lang", selected?.id as string);

        })()
        //eslint-disable-next-line
    }, [selected?.id]);
    useEffect(() => {
        checkRoute()
        //eslint-disable-next-line
    }, [location.pathname]);

    const languageChanger = (item: ISelected) => {
        setSelected(item);
        localStorage.setItem("current_language", item.id);
        language.setLanguage(item.id)
        document.documentElement.setAttribute("lang", selected?.id as string);

    };
    return (<div className="P-language-bar">
        <div
            className="P-selector"
            onMouseOver={() => {
                setOnHover(true);
            }}
            onMouseLeave={() => {
                setOnHover(false);
            }}
        >
            <p className="G-justify-between G-align-center">
                {t(selected?.title as string)} <img src={selected?.icon} alt="flag"/>{" "}
                {onHover ? <ArrowDropUp/> : <ArrowDropDown/>}
            </p>
            <ul className={onHover ? "active" : ""}>
                {options.map((item, index) => {
                    if (item.title !== selected?.title) {
                        return (
                            <li
                                key={item.title + index}
                                onClick={() => languageChanger(item)}
                            >
                                {" "}
                                {t(item.title)} <img src={item.icon} alt="flag"/>
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    </div>)
}

export default LanguageBar