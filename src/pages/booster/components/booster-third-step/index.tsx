import {FC, MouseEventHandler, useRef} from "react";
import AnimationSide from "src/components/animation/animation-side";
import {useTranslation} from "react-i18next";
import BoosterInput from "../booster-input";
import BoosterButton from "../booster-button";
import Animation from "src/components/animation";
import AnimationSideRTL from "src/components/animation/animation-side-rtl";

const BoosterThirdStep: FC<{ onChangeStep: MouseEventHandler<HTMLButtonElement> }> = ({onChangeStep}) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const actions = useRef<HTMLDivElement | null>(null)
    const content = useRef<HTMLDivElement | null>(null)
    return (<div className={`G-container P-sender`}>
        <AnimationSide element={title}>
            <div className={`P-title`} ref={title}>{t("Expected-text")}</div>
        </AnimationSide>
        <AnimationSideRTL element={content}>
            <div className={`P-content`} ref={content}>
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
            <div className={`P-form P-actions`} ref={actions}>
                <div className={`P-inputs-container`}/>
                <BoosterButton label={t("Send-text")} onClick={onChangeStep}/>
            </div>
        </Animation>


    </div>)
}

export default BoosterThirdStep