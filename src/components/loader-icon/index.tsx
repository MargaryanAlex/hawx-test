import React from "react";
import './style.scss'
import {LoaderIconEnum} from "./loader-icon.enum";

interface ILoaderIcon {
    loaderType?: LoaderIconEnum
}

function LoaderIcon({loaderType = LoaderIconEnum.button}: ILoaderIcon) {
    return (
            <div className={`P-loader-icon`}>
                <span className={`G-loader-dot`}/>
                <span className={`G-loader-dot`}/>
                <span className={`G-loader-dot`}/>
            </div>
    )
}

export default LoaderIcon