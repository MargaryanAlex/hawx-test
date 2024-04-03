import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import eng_translation from "./locales/eng/translations.json";
import rus_translation from "./locales/rus/translations.json";
import br_translation from "./locales/br/translations.json";
import tr_translation from "./locales/tr/translations.json";
import sp_translation from "./locales/sp/translations.json";
import hi_translation from "./locales/hi/translations.json";

const DEFAULT_LOCALE: string = "eng";

i18n.use(initReactI18next).init({
    // debug: global.isDev,
    debug: false,
    resources: {
        eng: {translation: eng_translation},
        br: {translation: br_translation},
        rus: {translation: rus_translation},
        tr: {translation: tr_translation},
        sp: {translation: sp_translation},
        hi: {translation: hi_translation},
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: "eng",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
