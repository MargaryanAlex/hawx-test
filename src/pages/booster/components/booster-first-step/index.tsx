import BoosterInput from "../booster-input";
import BoosterSelect, {ISelectedList} from "../booster-select";
import BoosterButton from "../booster-button";
import {FC, MouseEventHandler, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import AnimationSide from "src/components/animation/animation-side";
import Animation from "src/components/animation";

const markets = [
    {
        name: "Asia",
        value: 0,
    },
    {
        name: "Latam",
        value: 1,
    },
    {
        name: "North America",
        value: 2,
    },
    {
        name: "Africa",
        value: 3,
    },
    {
        name: "Europe",
        value: 4,
    },
    {
        name: "Eastern Countries",
        value: 5,
    },
    {
        name: "Other",
        value: 6,
    },
]
const BoosterFirstStep: FC<{ onChangeStep: MouseEventHandler<HTMLButtonElement> }> = ({onChangeStep}) => {
    const {t} = useTranslation()
    const title = useRef<HTMLDivElement | null>(null)
    const content = useRef<HTMLDivElement | null>(null)
    const [selectedValue, setSelectedValue] = useState<number | null>(null);
    const handleSelect = (item: ISelectedList | null) => {
        if (item) {
            setSelectedValue(item.value);
        } else {
            setSelectedValue(null);
        }
    };
    return (<div className={`G-container`}>
        <AnimationSide element={title}>
            <div className={`P-title`} ref={title}>{t("Calculate-text")}</div>
        </AnimationSide>
        <Animation element={content}>
            <div className={`P-form`} ref={content}>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("Monthly-Active-Players-text")} onChange={(e) => {
                    }}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("Monthly-New-Players-text")} onChange={(e) => {
                    }}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("Average-GGR-per-User-(AGPU)-text")} onChange={(e) => {
                    }}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterInput label={t("Current-monthly-GGR-(EURO)-text")} onChange={(e) => {
                    }}/>
                </div>
                <div className={`P-inputs-container`}>
                    <BoosterSelect list={markets} label={t("Operating-Market-text")} selectedValue={selectedValue}
                                   onSelect={handleSelect}/>

                </div>

            </div>

            <div className={`P-form`}>
                <BoosterButton label={t("Simulate-text")} onClick={onChangeStep}/>
            </div>
        </Animation>


    </div>)
}
export default BoosterFirstStep