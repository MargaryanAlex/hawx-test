import "./style.scss";
import ContactsArea from "./components/contacts-area";
import WebFooter from "./components/web-footer";
import MobileFooter from "./components/mobile-footer";

const Footer = () => {

     return (
        <div className="P-footer">
            <ContactsArea/>
            <WebFooter/>
            <MobileFooter/>
        </div>
    );
};

export default Footer;
