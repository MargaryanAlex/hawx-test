import Select from "src/components/select/select";
import {FC} from "react";

export interface ISelectedList {
    name: string;
    value: number;
}

interface IBoosterSelect {
    label: string;
    list: ISelectedList[];
    onSelect: (item: ISelectedList | null) => void
    selectedValue: number | null
}

const BoosterSelect: FC<IBoosterSelect> = ({label, list, onSelect, selectedValue}) => {


    return (<div className={`P-booster-input`}>
        <span className={`P-label`}>{label}</span>
        <Select onChange={onSelect}
                placeholder={"select txt"}
                isClear={false}
                value={selectedValue}
                selectedNameKey={"name"}
                selectedValueKey={"value"}
                optionsList={list}
        />

    </div>)
}

export default BoosterSelect