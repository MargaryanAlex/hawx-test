import "./style.scss"
import useBooster from "./useBooster";
import BoosterFirstStep from "./components/booster-first-step";
import BoosterSecondStep from "./components/booster-second-step";
import BoosterThirdStep from "./components/booster-third-step";
import BoosterForthStep from "./components/booster-forth-step";
import {useState} from "react";


const Booster = () => {
    const {transform, step, setStep} = useBooster()
    const [percent,setPercent]=useState<number>(0)
    const [time,setTime]=useState<string>("")
    return (
        <div className={`P-booster`}>
            <div className={`P-blur-container`}>
                <span className={`P-blur`} style={{transform: transform}}/>
            </div>
            {step === 0 && <BoosterFirstStep onChangeStep={() => setStep(1)} setPercent={(e)=>setPercent(e)} setTime={(e)=>{setTime(e)}}/>}
            {step === 1 && <BoosterSecondStep onChangeStep={() => setStep(2)}/>}
            {step === 2 && <BoosterThirdStep onChangeStep={() => setStep(3)} percent={percent} time={time}/>}
            {step === 3 && <BoosterForthStep onChangeStep={() => setStep(0)}/>}
        </div>
    )
}

export default Booster