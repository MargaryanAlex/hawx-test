import React, {FC, ReactElement} from "react";
import Footer from "src/components/footer";
import Loader from "src/components/loader";
import NewsSection from "src/components/newsSection";

const SolutionsLayout: FC<{ children: ReactElement, loader: boolean }> = ({children, loader}) => {
    if (loader) {
        return <Loader/>
    } else {
        return (
            <div>
                {children}
                {/* <ClintsSection /> */}
                <NewsSection/>
                <Footer/>
            </div>
        );
    }
    ;
}

export default SolutionsLayout;
