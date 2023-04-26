import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
