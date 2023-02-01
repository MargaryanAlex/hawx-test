import {useEffect, useState} from "react";
import {ISelectedList} from "./components/booster-select";
import {useTranslation} from "react-i18next";



const useBooster = () => {
    const [transform, setTransform] = useState<string>("translate(0,0) scale(1)")
    const [step, setStep] = useState<number>(0)
    const {t} = useTranslation()

    const periods: ISelectedList[] = [
        {
            name: t("3-mounts-text"),
            value: 3,
        },
        {
            name: t("6-mounts-text"),
            value: 6,
        },
        {
            name: t("9-mounts-text"),
            value: 9,
        },
        {
            name: t("12-mounts-text"),
            value: 12,
        },
        {
            name: t("24-mounts-text"),
            value: 24,
        },
    ]

    const markets: ISelectedList[] = [
        {
            name: t("Africa-text"),
            value: 0.6,
        },
        {
            name: t("Asia-text"),
            value: 0.3,
        },
        {
            name: t("Eastern-Countries-text"),
            value: 0.8,
        },
        {
            name: t("Europe-text"),
            value: 1,
        },
        {
            name: t("Latam-text"),
            value: 0.9,
        },
        {
            name: t("North-America-text"),
            value: 1,
        },




    ]

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
        markets,
        periods,
        transform,
        step,

        setStep,
    }
}

export default useBooster