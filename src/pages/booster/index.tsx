import "./style.scss"
import useBooster from "./useBooster";
import BoosterFirstStep from "./components/booster-first-step";
import BoosterSecondStep from "./components/booster-second-step";
import BoosterThirdStep from "./components/booster-third-step";
import BoosterForthStep from "./components/booster-forth-step";


const Booster = () => {
    const {transform, step, setStep} = useBooster()

    return (
        <div className={`P-booster`}>
            <div className={`P-blur-container`}>
                <span className={`P-blur`} style={{transform: transform}}/>
            </div>
            {step === 0 && <BoosterFirstStep onChangeStep={() => setStep(1)}/>}
            {step === 1 && <BoosterSecondStep onChangeStep={() => setStep(2)}/>}
            {step === 2 && <BoosterThirdStep onChangeStep={() => setStep(3)}/>}
            {step === 3 && <BoosterForthStep onChangeStep={() => setStep(0)}/>}
        </div>
    )
}

export default Booster