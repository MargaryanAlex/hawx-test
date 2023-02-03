import {FC, MouseEventHandler} from "react";
import LoaderIcon from "src/components/loader-icon";

interface IBoosterButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>
    isLoading?: boolean
}

const BoosterButton: FC<IBoosterButtonProps> = ({label, onClick, isLoading = false}) => {
    return (
        <div className={`P-simulate-btn-container P-inputs-container`}>
            <button className={`P-simulate-btn ${isLoading?"disabled":""}`} onClick={onClick} disabled={isLoading}>        {isLoading ?
                <LoaderIcon/> : label}</button>
        </div>
    )
}

export default BoosterButton