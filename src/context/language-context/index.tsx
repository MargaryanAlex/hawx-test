import {createContext, ReactElement, useState} from "react";
export type languagesT="eng" | "rus"
interface ILanguageContext {
    language: languagesT,
    setLanguage: (language: languagesT) => void
}

export const LanguageContext = createContext<ILanguageContext>({
    language: "eng", setLanguage: () => {
    }
})

const LanguageProvider = ({children}: { children: ReactElement }) => {
    const [language,setLanguage]=useState<languagesT>("eng")
    return (
        <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>
    )
}

export default LanguageProvider