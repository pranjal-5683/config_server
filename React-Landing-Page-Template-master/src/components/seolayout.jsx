import React from "react";
import StructuredData from "./seodata";

const Layout = ({ children }) => {
  return (
    <div>
      <StructuredData />
      {children}
    </div>
  );
};

export default Layout;
