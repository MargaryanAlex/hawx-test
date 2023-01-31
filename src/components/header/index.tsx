import {NavLink, useLocation} from "react-router-dom";
import "./style.scss";
import logo from "src/assets/img/logo.svg";
import {useTranslation} from "react-i18next";
import MobileHeader from "./components/mobile-header";
import DesktopHeader from "./components/desktop-header";
import {useEffect, useState} from "react";
import {languagesT} from "../../context/language-context";
import {boosterRouteList} from "../../router";

export interface IOnHover {
    Solutions: boolean;
    selector: boolean;
    burgerMenu: boolean;
}

export interface ISelected {
    title: string;
    icon: string;
    id: languagesT;
}

const Header = () => {
    const {t} = useTranslation()
    const location = useLocation()
    const [light, setLight] = useState<boolean>(false)
    const [left, setLeft] = useState<number>(-100)
    const [opacity, setOpacity] = useState<number>(0)
    useEffect(() => {
        if (boosterRouteList.find(item => item.path === location.pathname)) {
            setLight(true)
        } else {
            setLight(false)
        }

    }, [location.pathname])
    return (
        <header className={light ? "P-header white" : `P-header`}>
            <div className="G-container G-justify-between G-align-center">
                <div className="P-logo">
                    <NavLink to="/" onClick={() => {
                        setLeft(-100)
                        setOpacity(0)
                    }}>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>

                <DesktopHeader left={left} setOpacity={e => setOpacity(e)} opacity={opacity}
                               setLeft={(e) => setLeft(e)}/>

                <MobileHeader/>

            </div>
        </header>
    )
        ;
};

export default Header;
