import React from "react";
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-6">
            <h4>SUBSCRIBE</h4>
            <p>To Receive Updates In Your Mailbox</p>

            <input type="text" class="form-control" id="inputCity" />
            <button type="submit" class="btn btn-primary mt-3 mb-4">
              SUBMIT
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <h4>SOCIAL MEDIA</h4>
            <div class="social-icon F-social">
              <a href="#">
                <img src="./twitter.svg" alt="Twitter" />
              </a>
              <a href="#">
                <img src="./facebook.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="./pinterest.svg" alt="Pinterest" />
              </a>
              <a href="#">
                <img src="./youtube.svg" alt="Youtube" />
              </a>
              <a href="#">
                <img src="./instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="./discord.svg" alt="Discord" />
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Conditions</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <h4>NFTS</h4>
            <ul>
              <li>
                <a href="#">Valkry™ Decks</a>
              </li>
              <li>
                <a href="#">Valkry™ Founders Pass</a>
              </li>
              <li>
                <a href="#">Mongrels™</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container copyright">
        Copyright 2023. Valkry™ LLC and Mongrels™. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
