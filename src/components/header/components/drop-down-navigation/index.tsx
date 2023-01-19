import {NavLink} from "react-router-dom";
import {MutableRefObject, RefObject, useState} from "react";
import {useTranslation} from "react-i18next";
import {IMenu} from "src/router";

const DropDownNavigation = ({
                                item,
                                onClick
                            }: { item: IMenu, onClick?:()=>void}) => {
    const {t} = useTranslation()
    const [onHover, setOnHover] = useState<boolean>(false)



    return (<div
        className="P-dropdown"
        onMouseOver={() => {
            setOnHover(true);
        }}
        onMouseLeave={() => {
            setOnHover(false);
        }}
    >
        <p>{t(item.title)}</p>
        <div className={onHover ? "active P-options" : "P-options"}>
            <ul>
                {item.subList?.map((subItem, subIndex) => {
                    return (
                        <li key={subItem.title + subIndex}>
                            <NavLink to={subItem.path as string}
                                     onClick={onClick}
                            >
                                {t(subItem.title)}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>)
}

export default DropDownNavigation