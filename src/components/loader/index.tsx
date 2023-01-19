import logo from "src/assets/img/favicon.svg"
import "./style.scss"

const Loader = () => {

    return (
        <div className={`G-loader`}>
            <div className={`G-loader-box`}>
                <img src={logo} alt="logo"/>
                <div className={`G-loader-container`}>
                    <span className={`G-loader-dot`}/>
                    <span className={`G-loader-dot`}/>
                    <span className={`G-loader-dot`}/>
                </div>
            </div>
        </div>
    )
}

export default Loader