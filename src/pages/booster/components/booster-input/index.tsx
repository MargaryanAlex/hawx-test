import {ChangeEventHandler, FC} from "react";
import "./style.scss"

export enum InputTypeEnum {
    number = "number",
    text = "text"
}

interface IBoosterInput {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string
    error: boolean
    errorText: string
    type?: InputTypeEnum
    value: string
}

const BoosterInput: FC<IBoosterInput> = ({
                                             value,
                                             label,
                                             name,
                                             errorText,
                                             error,
                                             type = InputTypeEnum.text,
                                             onChange
                                         }) => {
    return (
        <div className={`P-booster-input`}>
            <span className={`P-label`}>{label}</span>
            <input value={value} type={type} onChange={onChange} className={`P-input ${error ? "error" : ""}`}
                   name={name}/>
            {error && <span className={`P-error-text`}>{errorText}</span>}
        </div>
    )
}
export default BoosterInput