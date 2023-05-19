import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import customJs from "../_assets/js/custom";
const Nav = () => {
  useEffect(() => {
    // customJs();
  }, []);
  return (
    <div class="container-fluid p-0">
      <div class="topheader">
        <div class="row m-0">
          <div class="col-auto">
            <div class="logo">
              <Link to="/">
                <img src="./valkry-logo.png" alt="" srcset="" />
              </Link>
            </div>
          </div>
          <div class="col text-center mt-auto mb-auto set-margin480">
            Season One Collection drops June 2023!
          </div>
          <div class="col-auto set-w-640">
            <Link
              to="/mongerels"
              class="btn btn-primary btn-connect btn-connect-line"
            >
              MONGERELS
            </Link>
            <button class="btn btn-primary btn-connect">CONNECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
