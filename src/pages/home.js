import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateMongerels = () => {
    navigate("/the-collection");
    navigate("/naming");
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
                href="https://www.jpg.store/collection/mongrels?tab=items"
              >
                BUY MONGRELS
              </a>
            </button>
            <button class="btn btn-primary linkButton ">
              <a
                className="linkButton"
                href="https://discord.gg/aju3FyCAcq"
              >
                COMMUNITY
              </a>
            </button>
            <button class="btn btn-primary linkButton ">
                   <a
                className="linkButton"
                href="https://mongrels.wtf/naming.js"
              >
              NAME A MONGREL
                  </a>
            </button>
            <button class="btn btn-primary linkButton">
              
              <a
                className="linkButton"
                href="https://valkry.life"
              >
                VALKRY
              </a>
            </button>
            <button class="btn btn-primary linkButton">
              <a
                className="linkButton"
                href="mailto:hello@valkry.life"
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
