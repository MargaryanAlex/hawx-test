import Animation from "src/components/animation";
import envelope from "src/assets/img/footer/Envelope.svg";
import {useTranslation} from "react-i18next";
import {useRef} from "react";

const ContactsArea = () => {
    const {t} = useTranslation();
    const contacts = useRef<HTMLDivElement | null>(null)

    return (<div className="P-contacts-area-container">
            <Animation element={contacts}>

                <div className="P-contacts-area" ref={contacts}>

                    <h3>{t("GET_START-text")}</h3>
                    <p>{t("DONT_HESITATE-text")}</p>
                    <div className="P-btns">
                        {/*<button
            onClick={() => {
              window.location = "tel:+995595770073" as (string | Location) &
                Location;

              navigator.clipboard.writeText("info@hawx.io ");
            }}
          >
            <img src={phone} alt="phone" />
            {t("PHONE-text")}
          </button>*/}
                        <button
                            onClick={() => {
                                window.location = "mailto:info@hawx.io" as (string | Location) &
                                    Location;

                                navigator.clipboard.writeText("info@hawx.io ");
                            }}
                        >
                            <img src={envelope} alt="Envelope"/>
                            {t("EMAIL-text")}
                        </button>
                    </div>
                </div>
            </Animation>
        </div>)
}


export default ContactsArea