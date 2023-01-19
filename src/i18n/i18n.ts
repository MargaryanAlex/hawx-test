import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import eng_translation from "./locales/eng/translations.json";
import rus_translation from "./locales/rus/translations.json";

const DEFAULT_LOCALE: string = "eng";

i18n.use(initReactI18next).init({
    // debug: global.isDev,
    debug: false,
    resources: {
        eng: {translation: eng_translation},
        rus: {translation: rus_translation},
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: "eng",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
