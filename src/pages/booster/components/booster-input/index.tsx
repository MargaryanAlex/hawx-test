import {ChangeEventHandler, FC} from "react";
import "./style.scss"
interface IBoosterInput {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const BoosterInput: FC<IBoosterInput> = ({label, onChange}) => {
    return (
        <div className={`P-booster-input`}>
            <span className={`P-label`}>{label}</span>
            <input type="text" onChange={onChange} className={`P-input`}/>
        </div>
    )
}
export default BoosterInput