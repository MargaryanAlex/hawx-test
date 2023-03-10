import {FC, useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import Animation from "src/components/animation";
import folded_head from "src/assets/img/booster/folded-hands.svg";

const BoosterForthStep: FC<{ onChangeStep: () => void }> = ({onChangeStep}) => {
    const {t} = useTranslation()
    const thanks = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        setTimeout(() => {
            onChangeStep()
        }, 2000)
    }, [])
    return (
        <div className={`P-thanks G-container`} ref={thanks}>
            <Animation element={thanks}>
                <p className={`P-h1`}>{t("Thank-You-text")}<img src={folded_head} alt="flash" width={31} height={31}/>
                </p>
                <p className={`P-text`}>{t("We-will-get-text")}</p>
            </Animation>
        </div>

    )
}
export default BoosterForthStep