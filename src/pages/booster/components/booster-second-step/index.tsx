import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import AnimationSide from "../../../../components/animation/animation-side";

const BoosterSecondStep = ({onChangeStep}: { onChangeStep: () => void }) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const [half, setHalf] = useState<boolean>(false)
    const [full, setFull] = useState<boolean>(false)
    const [done, setDone] = useState<boolean>(false)
    useEffect(() => {
        setHalf(true)
        setTimeout(() => {
            setFull(true)
        }, 2000)
    }, [])
    useEffect(() => {
        if (full) {
            setTimeout(() => {
                setDone(true)
            }, 800)
            setTimeout(onChangeStep, 3000)
        }
    }, [full])
    return (
        <div className={`P-simulating G-container`}>
            <AnimationSide element={title}>
                {!done && <div className={`P-title`} ref={title}>{t("Simulating-text")}</div>}
            </AnimationSide>
            <div className={`P-simulator-container`}>
                <p className={`P-simulator`}><span
                    className={`P-selector-line ${half ? "half" : ""} ${full ? "full" : ""}`}/>
                </p>
                <p className={`P-done-text ${done ? "done" : ""}`}>{t("Done!-text")}</p>
            </div>
        </div>
    )
}

export default BoosterSecondStep