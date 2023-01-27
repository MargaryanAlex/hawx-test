import {NavLink} from "react-router-dom";
import logo_white from "src/assets/img/header/logo_white.png";
import close from "src/assets/img/header/close.svg";
import {navList} from "src/router";
import LanguageBar from "../language-bar";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import DropDownNavigation from "../drop-down-navigation";

const MobileHeader = () => {
    const {t} = useTranslation()
    const [onHover, setOnHover] = useState<boolean>(false)
    return (
        <div className="G-mobile">
            {/*<span className={`P-white-background`}/>*/}
            <span
                onClick={() => {
                    setOnHover(true);
                }}
                className={`P-menu-icon icon menu`}
            />
            <div
                className={
                    onHover ? "active P-mobile-menu" : "P-mobile-menu"
                }
            >
                <p className={`P-background`}><span/></p>

                <div className="P-top G-justify-between">
                    <NavLink
                        to="/"
                        onClick={() => {
                            setOnHover(false);
                        }}
                    >
                        <img src={logo_white} alt="logo_white"/>
                    </NavLink>
                    <img
                        src={close}
                        alt="close"
                        onClick={() => {
                            setOnHover(false);
                        }}
                    />
                </div>
                <div className="P-nav">
                    <div className="P-navigation ">
                        {navList.map((item, index) => {
                            return (
                                <div key={item.title + index}>
                                    {item.path && (
                                        <NavLink
                                            to={item.path}
                                            onClick={() => {
                                                setOnHover(false);
                                            }}
                                        >
                                            <span className={`P-text`}>{t(item.title)}{""}{item.icon &&
                                                <img src={item.icon} alt="icon"  width={20} height={20}/>}
                                            </span>
                                        </NavLink>
                                    )}
                                    {item.subList && (
                                        <DropDownNavigation item={item} onClick={() => setOnHover(false)}/>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <LanguageBar/>

                </div>
            </div>
        </div>
    )
}

export default MobileHeader