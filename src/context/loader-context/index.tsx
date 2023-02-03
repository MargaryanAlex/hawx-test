import {createContext, ReactElement, useState} from "react";

export type languagesT = "eng" | "rus"

interface ILanguageContext {
    loader: boolean,
    setLoader: (status: boolean) => void
}

export const LoaderContext = createContext<ILanguageContext>({
    loader: true, setLoader: () => {
    }
})

const LoaderProvider = ({children}: { children: ReactElement }) => {
    const [loader, setLoader] = useState<boolean>(true)
    return (
        <LoaderContext.Provider value={{loader, setLoader}}>{children}</LoaderContext.Provider>
    )
}

export default LoaderProvider