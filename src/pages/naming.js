import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Naming = () => {
  const navigate = useNavigate();
  const navigateMongerels = () => {
    navigate("/the-collection");
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <img class="mongerels" src="./mongerels.jpg" alt="" />
          </div>

          <div class="col-12 text-center">
            <p>
              Naming
            </p>
            <p>
              This is how you name your mongrel.
            </p>
          </div>
         
        </div>
       
       
       
      </div>
    </>
  );
};

export default Naming;
