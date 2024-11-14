import Select from "src/components/select/select";
import {FC} from "react";

export interface ISelectedList {
    name: string;
    value: number;
    agregator?:number;
}

interface IBoosterSelect {
    label: string;
    list: ISelectedList[];
    onSelect: (item: ISelectedList | null) => void
    selectedValue: number | null
    placeholder: string
    errorText: string
    error: boolean
}

const BoosterSelect: FC<IBoosterSelect> = ({label, list, onSelect, placeholder, errorText, selectedValue, error}) => {


    return (<div className={`P-booster-input`}>
        <span className={`P-label`}>{label}</span>
        <Select onChange={onSelect}
                placeholder={placeholder}
                isClear={false}
                value={selectedValue}
                selectedNameKey={"name"}
                selectedValueKey={"value"}
                optionsList={list}
                errorText={errorText}
                error={error}
        />

    </div>)
}

export default BoosterSelect