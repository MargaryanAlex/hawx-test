import React, { FC, ReactElement } from "react";
import Footer from "src/components/footer";
import Header from "src/components/header";

const PagesLayout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
