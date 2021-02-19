import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
  const { children, location } = props;

  if (location.pathname === '/') {
    return (
      <>
        {children}
      </>
    )
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default withRouter(Layout);
