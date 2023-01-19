import {FC, MouseEventHandler} from "react";

interface IBoosterButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const BoosterButton: FC<IBoosterButtonProps> = ({label, onClick}) => {
    return (
        <div className={`P-simulate-btn-container P-inputs-container`}>
            <button className={`P-simulate-btn`} onClick={onClick}>{label}</button>
        </div>
    )
}

export default BoosterButton