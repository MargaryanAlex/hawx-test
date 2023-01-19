import {navList} from "../../../../router";
import {createRef, LegacyRef, useEffect, useRef} from "react";
import {NavLink, useLocation} from "react-router-dom";
import DropDownNavigation from "../drop-down-navigation";
import LanguageBar from "../language-bar";
import {useTranslation} from "react-i18next";

const DesktopHeader = ({
                           left,
                           setLeft,
                           setOpacity,
                           opacity
                       }: {
    left: number, setLeft: (e: number) => void,
    setOpacity: (e: number) => void,
    opacity: number
}) => {
    const location = useLocation()
    const {t} = useTranslation()
    const elementsRef = useRef(navList.map(() => createRef()));
    const setPosition = (element: HTMLElement) => {
        setOpacity(1)
        setLeft(element.offsetLeft + (element.offsetWidth / 2))
    }
    useEffect(() => {

        let index = navList.findIndex(item => location.pathname === item.path)

        if (index >= 0 && setPosition) {
            setTimeout(() => setPosition(elementsRef?.current[index].current as HTMLElement), 0)
        }
        let subIndex: number | undefined = undefined
        navList.map((item, index) => {
            if (item.subList) {
                item.subList.map(route => {
                    if (route.path === location.pathname) {
                        subIndex = index
                    }
                })
            }
        })
        if (subIndex && subIndex >= 0 && setPosition) {
            setTimeout(() => setPosition(elementsRef?.current[subIndex as number].current as HTMLElement), 0)

        }

        window.addEventListener("resize", () => {
            let index = navList.findIndex(item => location.pathname === item.path)

            if (index >= 0 && setPosition) {
                setTimeout(() => setPosition(elementsRef?.current[index].current as HTMLElement), 0)
            }
            let subIndex: number | undefined = undefined
            navList.map((item, index) => {
                if (item.subList) {
                    item.subList.map(route => {
                        if (route.path === location.pathname) {
                            subIndex = index
                        }
                    })
                }
            })
            if (subIndex && subIndex >= 0 && setPosition) {
                setTimeout(() => setPosition(elementsRef?.current[subIndex as number].current as HTMLElement), 0)

            }
        })
    }, [])


    return (
        <div className="P-menu G-web G-justify-between G-align-center">
            <div className="P-navigation G-justify-between G-align-center">
                <span className={'dot'} style={{left: `${left}px`, opacity}}/>
                {navList.map((item, index) => {

                    return (
                        <div key={item.title + index}
                             ref={elementsRef?.current[index] as LegacyRef<HTMLDivElement>}
                        >
                            {item.path && (
                                <NavLink to={item.path}
                                         onClick={(e) => setPosition(e.target as HTMLElement)}
                                ><span className={`P-text`}>{t(item.title)}{""}{item.icon &&
                                    <img src={item.icon} alt="icon"/>}
                                </span></NavLink>
                            )}
                            {item.subList && (
                                <DropDownNavigation item={item}
                                                    onClick={() => setPosition(elementsRef?.current[index].current as HTMLElement)}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <LanguageBar elementsRef={elementsRef} setPosition={setPosition}/>

        </div>
    )
}

export default DesktopHeader