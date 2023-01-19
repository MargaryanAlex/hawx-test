import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "./App.scss";
import PagesLayout from "./layout/pagesLayout";
import {boosterRouteList, IRoute, pagesRouteList, solutionsRouteList} from "./router";
import Header from "./components/header";
import React from "react";
import LanguageContext from "./context/language-context";

function App() {
    return (
        <BrowserRouter>
            <LanguageContext>
                <div className="App">
                    <Header/>

                    <Routes>
                        {pagesRouteList.map((item: IRoute) => {
                            return (
                                <Route
                                    path={item.path}
                                    element={
                                        <PagesLayout>
                                            <item.component/>
                                        </PagesLayout>
                                    }
                                    key={item.path}
                                />
                            );
                        })}
                        {solutionsRouteList.map((item: IRoute) => {
                            return (
                                <Route
                                    path={item.path}
                                    element={

                                        <item.component/>

                                    }
                                    key={item.path}
                                />
                            );
                        })}
                        {boosterRouteList.map((item: IRoute) => {
                            return (
                                <Route
                                    path={item.path}
                                    element={

                                        <item.component/>

                                    }
                                    key={item.path}
                                />
                            );
                        })}

                        {/*<Route*/}
                        {/*    path={"/loader"}*/}
                        {/*    element={<Loader/>}*/}
                        {/*/>*/}
                        <Route path="*" element={<Navigate to="/" replace/>}/>{" "}
                    </Routes>
                </div>
            </LanguageContext>
        </BrowserRouter>
    );
}

export default App;
