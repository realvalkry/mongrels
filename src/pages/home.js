import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateMongerels = () => {
    navigate("/the-collection");
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <img class="set-width-logo" src="./Valkry-large.jpg" alt="" />
          </div>
          <div class="col-12 action-collect">
            <button class="btn btn-primary linkButton">
              <a
                className="linkButton"
                href="#"
              >
                BUY MONGRELS
              </a>
            </button>
            <button class="btn btn-primary linkButton ">
              <a
                className="linkButton"
                href="https://saturnnft.io/mint/e3cf323e-e535-47fc-afb2-3313595f5b03"
              >
                COMMUNITY
              </a>
            </button>
            <button class="btn btn-primary linkButton ">
                   <a
                className="linkButton"
                href="#"
              >
              DOG NAMING
                  </a>
            </button>
            <button class="btn btn-primary linkButton">
              
              <a
                className="linkButton"
                href="https://saturnnft.io/mint/e3cf323e-e535-47fc-afb2-3313595f5b03"
              >
                VALKRY
              </a>
            </button>
            <button class="btn btn-primary linkButton">
              <a
                className="linkButton"
                href="https://saturnnft.io/mint/e3cf323e-e535-47fc-afb2-3313595f5b03"
              >
                CONTACT
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
