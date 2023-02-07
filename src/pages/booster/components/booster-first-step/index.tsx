import BoosterInput, {InputTypeEnum} from "../booster-input";
import BoosterSelect, {ISelectedList} from "../booster-select";
import BoosterButton from "../booster-button";
import {ChangeEvent, FC, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import AnimationSide from "src/components/animation/animation-side";
import Animation from "src/components/animation";
import AnimationSideRTL from "../../../../components/animation/animation-side-rtl";
import flash from "src/assets/img/booster/flash.svg"
import useBooster from "../../useBooster";
import useValidations from "../../../../hooks/useValidations";
import {IData} from "../../index";

interface IError {
    depositors: boolean
    registrations: boolean
    ggr: boolean
    market: boolean
    period: boolean
}

interface IValues {
    depositors: string
    registrations: string
    ggr: string

}

const BoosterFirstStep: FC<{
    onChangeStep: (data: IData) => void,
}>
    = ({
           onChangeStep,

       }) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const content = useRef<HTMLDivElement | null>(null)
    const {isEmpty, isNull} = useValidations()
    const [selectedMarket, setSelectedMarket] = useState<number | null>(null);
    const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
    const [error, setError] = useState<IError>({
        depositors: false,
        registrations: false,
        ggr: false,
        market: false,
        period: false
    });
    const [values, setValues] = useState<IValues>({
        depositors: "",
        registrations: "",
        ggr: ""
    })


    const {markets, periods} = useBooster()
    const handleSelectMarket = (item: ISelectedList | null) => {
        if (item) {
            setSelectedMarket(item.value);
            setError({...error, market: false})

        } else {
            setSelectedMarket(null);
        }
    };
    const handleSelectPeriod = (item: ISelectedList | null) => {
        if (item) {
            setSelectedPeriod(item.value);
            setError({...error, period: false})
        } else {
            setSelectedPeriod(null);
        }
    };
    const validation = () => {
        let valid = true;
        let errors: IError = {...error}
        for (let key in values) {
            if (isEmpty(values[key as keyof IValues])) {
                errors[key as keyof IError] = true
                valid = false
                console.log(values[key as keyof IValues] as string)
            }
        }
        if (isNull(selectedPeriod)) {
            errors.period = true
            valid = false
        }
        if (isNull(selectedMarket)) {
            errors.market = true
            valid = false
        }
        setError({...errors})
        return valid
    }
    const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
        setError({...error, [event.target.name]: false})
    }
    return (<div className={`G-container`}>
            <AnimationSide element={title}>
                <div className={`P-title loop`} ref={title}>{t("Calculate-text")}</div>
            </AnimationSide>
            <AnimationSideRTL element={title}>
                <div className={`P-title loop`} ref={title}>{t("profit-text")}<img src={flash} alt="flash" width={64}
                                                                                   height={64}/></div>
            </AnimationSideRTL>
            <Animation element={content}>
                <div className={`P-form G-justify-center`} ref={content}>
                    <div className={`P-inputs-container`}>
                        <BoosterInput value={values.depositors} label={t("Monthly-Depositors-text")}
                                      onChange={handelChange} type={InputTypeEnum.number} error={error.depositors}
                                      name={"depositors"}
                                      errorText={t("Field must be filled")}/>
                    </div>
                    <div className={`P-inputs-container`}>
                        <BoosterInput value={values.registrations} label={t("Monthly-Registrations-text")}
                                      onChange={handelChange} type={InputTypeEnum.number} error={error.registrations}
                                      name={"registrations"}
                                      errorText={t("Field must be filled")}/>
                    </div>
                    <div className={`P-inputs-container`}>
                        <BoosterInput value={values.ggr} label={t("Monthly-GGR-(USD)-text")} onChange={handelChange}
                                      type={InputTypeEnum.number} error={error.ggr} name={"ggr"}
                                      errorText={t("Field must be filled")}/>
                    </div>

                    <div className={`P-inputs-container`}>
                        <BoosterSelect list={markets} label={t("Operating-Market-text")} selectedValue={selectedMarket}
                                       onSelect={handleSelectMarket} placeholder={t("Select-Market-text")}
                                       error={error.market} errorText={t("Market-must-be-selected-text")}/>

                    </div>
                    <div className={`P-inputs-container`}>
                        <BoosterSelect list={periods} label={t("Boosting-Period-text")} selectedValue={selectedPeriod}
                                       onSelect={handleSelectPeriod} placeholder={t("Select-Period-text")}
                                       error={error.period} errorText={t("Period-must-be-selected-text")}/>

                    </div>

                </div>

                <div className={`P-form G-justify-center`}>
                    <BoosterButton label={t("Simulate-text")} onClick={() => {
                        if (validation()) {
                            let result: number = Math.round((+values.ggr + (+values.depositors * 0.65 + (+values.registrations * 0.3 * (selectedPeriod as number))) * (+values.ggr / +values.depositors)
                                ) *
                                (selectedMarket as number))
                            let percent = `${Math.round((result - +values.ggr) / +values.ggr * 100)}`

                            onChangeStep({
                                ...values,
                                market: markets.find(item => selectedMarket === item.value)?.name as string,
                                period: periods.find(item => selectedPeriod === item.value)?.name as string,
                                percent:percent
                            })
                        }
                    }}/>
                </div>
            </Animation>


        </div>
    )
}
export default BoosterFirstStep