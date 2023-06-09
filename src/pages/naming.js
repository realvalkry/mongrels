import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Naming = () => {
  const navigate = useNavigate();
  const navigateMongerels = () => {
    navigate("/the-collection");
  };

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id,
      name,
      email,
    };

    fetch("https://rehmankabir.com/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(
          "Thank you for submitting a proposed name for your beloved Mongrel.  All submissions are manually approved.  Please allow up to 48 hours for processing however it is generally much quicker.  Once approved you will receive an email with the final steps involved in upgrading your Mongrel."
        );
        setId("");
        setName("");
        setEmail("");
        // Handle success or display error message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error or display error message to the user
      });
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <img class="mongerels" src="./mongerels.jpg" alt="" />
          </div>

          {/* <div class="col-12 text-center">
            <p>
              Naming
            </p>
            <p>
              This is how you name your mongrel.
            </p>
          </div> */}

          <div className="form-container-new">
            <h1>Name Your Mongrel</h1>
  <p>While we consider Mongrel naming to be a right of passage, and a unique ownership characteristic, it is absolutely NOT required.  Once a name is approved, and upgraded by its owner, it will remain his name FOREVER.  Each Mongrel can only be named ONCE!</p>
  <p>Please do not submit a name for a Mongrel you do not own.  Each upgrade requires a secure wallet connection and owner approval.</p>
  <ul>
    <li>Excessive obscenity / profanity will be denied!</li>
<li>Excessive use of numbers / symbols will be denied!</li>
<li>Duplicate naming / confusingly similar naming will not be allowed!</li>
  </ul>
  <p>And finally, please keep in mind the future market for your Mongrel and how a name could negatively impact your potential sale price.</p>
  <form>
              <div className="form-control-field">
                <label htmlFor="mongrelID">Mongrel ID</label>
                <input
                  type="text"
                  placeholder="Mongrel ID"
                  id="ongrelID"
                  required
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-control-field">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  id="username"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control-field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control-checkbox">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="agreement">
                  I agree to the <a href="https://valkry.life/terms-conditions"> terms and conditions </a>
                </label>
              </div>
              <button type="submit" className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naming;
