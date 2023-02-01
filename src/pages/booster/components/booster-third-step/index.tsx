import {ChangeEvent, FC, MouseEventHandler, useEffect, useRef, useState} from "react";
import AnimationSide from "src/components/animation/animation-side";
import {useTranslation} from "react-i18next";
import BoosterInput from "../booster-input";
import BoosterButton from "../booster-button";
import Animation from "src/components/animation";
import AnimationSideRTL from "src/components/animation/animation-side-rtl";
import rocket from "src/assets/img/booster/rocket.svg";

interface IError {
    name: boolean,
    email: boolean
}

interface IValues {
    name: string,
    email: string
}

const BoosterThirdStep: FC<{ onChangeStep: MouseEventHandler<HTMLButtonElement>, percent: number, time: string }> = ({
                                                                                                                         onChangeStep,
                                                                                                                         percent,
                                                                                                                         time
                                                                                                                     }) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const actions = useRef<HTMLDivElement | null>(null)
    const content = useRef<HTMLDivElement | null>(null)
    const [opacity, setOpacity] = useState<number>(0)
    const [error, setError] = useState<IError>({
        name: false,
        email: false
    })
    const [values, setValues] = useState<IValues>({
        name: "",
        email: ""
    })

    useEffect(() => {
        setTimeout(() => setOpacity(1), 200)
    }, [])

    const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
        setError({...error, [event.target.name]: false})
    }

    return (<div className={`G-container P-sender`}>
        <AnimationSide element={title}>
            <div className={`P-title loop`} ref={title}>{t("Boosted-text")}</div>
        </AnimationSide>
        <AnimationSideRTL element={title}>
            <div className={`P-title loop`} ref={title}>{t("increase-by-text")} {" "}{percent}%<img src={rocket}
                                                                                                    alt="flash"
                                                                                                    width={64}
                                                                                                    height={64}/></div>
        </AnimationSideRTL>
        <AnimationSideRTL element={content}>
            <div className={`P-content`} ref={content} style={{opacity: opacity}}>
                <p className={`P-h1`}>{t("in-text")}{" "}{time}!</p>
                {/*<p className={`P-h2`}>{t("You’re-the-lucky-one!-text")}</p>*/}
                {/*<p className={`P-text`}>{t("HawX-is-ready-text")}</p>*/}
                <p className={`P-subText`}>{t("Please-leave-text")}</p>
            </div>
        </AnimationSideRTL>
        <Animation element={actions}>

            <div className={`P-form`}>
                <div className={`P-inputs-container`}>
                    <BoosterInput value={values.name} label={t("Name-text")} onChange={handelChange} error={error.name}
                                  name={"name"} errorText={t("Field must be filled")}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterInput value={values.email} label={t("E-mail-text")} onChange={handelChange}
                                  error={error.email} name={"email"} errorText={t("Field must be filled")}/>
                </div>
            </div>
            <div className={`P-form P-actions G-justify-center`} ref={actions}>
                <BoosterButton label={t("Send-text")} onClick={onChangeStep}/>
            </div>
        </Animation>


    </div>)
}

export default BoosterThirdStep