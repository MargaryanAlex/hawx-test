import {useEffect, useState} from "react";

const useBooster = () => {
    const [transform, setTransform] = useState<string>("translate(0,0) scale(1)")
    const [step, setStep] = useState<number>(0)

    const random = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min) + min)
    }
    useEffect(() => {
        setTransform(`translate(${random(0, 60)}vw,calc(${random(40, 100)}vh - 40vw)) scale(1.${random(0, 5)})`)
        setInterval(() => {
            setTransform(`translate(${random(0, 60)}vw,calc(${random(40, 100)}vh - 40vw)) scale(1.${random(0, 5)})`)
        }, 5000)
    }, [])
    return {
        transform,
        step,

        setStep,
    }
}

export default useBooster