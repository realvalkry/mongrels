import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const navigateMongerels = () => {
    navigate("/mongerels");
  };
  return (
    <div className="container-fluid p-0">
      <div className="topheader">
        <div className="row m-0">
          <div className="col-auto">
            <div className="logo">
              <Link to="/">
                <img src="./valkry-logo.png" alt="" srcset="" />
              </Link>
            </div>
          </div>
          <div className="col text-center mt-auto mb-auto set-margin480">
            Season I Collection Drops Summer 2023
          </div>
          <div className="col-auto set-w-640">
            <button className="btn btn-primary btn-connect btn-connect-line linkButtonNav">
              <a className="linkButtonNav" href="https://valkry.life/">
                VALKRY
              </a>
            </button>

            <button className="btn btn-primary btn-connect btn-connect-line linkButtonNav">
              <a className="linkButtonNav" href="https://mongrels.wtf/">
                MONGRELS
              </a>
            </button>

            <button className="btn btn-primary btn-connect">CONNECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
