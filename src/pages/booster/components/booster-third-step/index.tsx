import {FC, MouseEventHandler, useEffect, useRef, useState} from "react";
import AnimationSide from "src/components/animation/animation-side";
import {useTranslation} from "react-i18next";
import BoosterInput from "../booster-input";
import BoosterButton from "../booster-button";
import Animation from "src/components/animation";
import AnimationSideRTL from "src/components/animation/animation-side-rtl";
import rocket from "src/assets/img/booster/rocket.svg";

const BoosterThirdStep: FC<{ onChangeStep: MouseEventHandler<HTMLButtonElement> }> = ({onChangeStep}) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const actions = useRef<HTMLDivElement | null>(null)
    const content = useRef<HTMLDivElement | null>(null)
    const  [opacity,setOpacity]=useState<number>(0)

    useEffect(()=>{setTimeout(() => setOpacity(1), 200)},[])

    return (<div className={`G-container P-sender`}>
        <AnimationSide element={title}>
            <div className={`P-title loop`} ref={title}>{t("Boosted-text")}</div>
        </AnimationSide>
        <AnimationSideRTL element={title}>
            <div className={`P-title loop`} ref={title}>{t("increase-by-text")}<img src={rocket} alt="flash" width={64} height={64}/></div>
        </AnimationSideRTL>
        <AnimationSideRTL element={content}>
            <div className={`P-content`} ref={content} style={{opacity: opacity}}>
                <p className={`P-h1`}>{t("1-year-text")}</p>
                <p className={`P-h2`}>{t("You’re-the-lucky-one!-text")}</p>
                <p className={`P-text`}>{t("HawX-is-ready-text")}</p>
                <p className={`P-subText`}>{t("Please-leave-text")}</p>
            </div>
        </AnimationSideRTL>
        <Animation element={actions}>

            <div className={`P-form`}>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("Name-text")} onChange={(e) => {
                    }}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("E-mail-text")} onChange={(e) => {
                    }}/>
                </div>
            </div>
            <div className={`P-form P-actions G-justify-center`} ref={actions}>
                <BoosterButton label={t("Send-text")} onClick={onChangeStep}/>
            </div>
        </Animation>


    </div>)
}

export default BoosterThirdStep