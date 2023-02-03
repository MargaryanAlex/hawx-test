import React, {FC, ReactElement} from "react";
import Footer from "src/components/footer";
import NewsSection from "src/components/newsSection";

const SolutionsLayout: FC<{ children: ReactElement }> = ({children,}) => {

    return (
        <div>
            {children}
            {/* <ClintsSection /> */}
            <NewsSection/>
            <Footer/>
        </div>
    );

    ;
}

export default SolutionsLayout;
