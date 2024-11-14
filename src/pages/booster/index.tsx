import "./style.scss"
import useBooster from "./useBooster";
import BoosterFirstStep from "./components/booster-first-step";
import BoosterSecondStep from "./components/booster-second-step";
import BoosterThirdStep from "./components/booster-third-step";
import BoosterForthStep from "./components/booster-forth-step";
import {useState} from "react";

export interface IData {

    depositors: string,
    registrations: string,
    ggr: string,
    market: string,
    period: string,
    percent: string
}

const Booster = () => {
    const {transform, step, setStep} = useBooster()
    const [data, setData] = useState<IData>({

        depositors: "",
        registrations: "",
        ggr: "",
        market: "",
        period: "",
        percent: ""
    })
    return (
        <div className={`P-booster`}>
            <div className={`P-blur-container`}>
                <span className={`P-blur`} style={{transform: transform}}/>
            </div>
            {step === 0 &&
                <BoosterFirstStep onChangeStep={(newData) => {
                    setData({...data, ...newData});
                    setStep(1)
                }}
/>}
            {step === 1 && <BoosterSecondStep onChangeStep={() => setStep(2)}/>}
            {step === 2 &&
                <BoosterThirdStep data={data} onChangeStep={() => setStep(3)} />}
            {step === 3 && <BoosterForthStep onChangeStep={() => setStep(0)}/>}
        </div>
    )
}

export default Booster