import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default withRouter(Layout);
