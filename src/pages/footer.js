import React from "react";
const Footer = () => {
  return (
    <footer className="pt-3 pb-3">
      <div className="container-fluid copyright pt-0 opacity-100">
        <div className="row">
          <div className="col-md-6">
            <img
              className="f-logo margin-l"
              src="./valkry-logo-1-w.png"
              alt=""
            />
          </div>
          <div className="col-md-6 mt-auto mb-auto text-end">
            2023. All Rights Reserved. Valkry <sup>TM</sup> / Mongrels{" "}
            <sup>TM</sup>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
