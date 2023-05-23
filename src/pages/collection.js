import img1 from "../_assets/images/img-1254.jpg";
import React, { useState, useEffect } from "react";
const Mongrel = () => {
  const [Images, SetImages] = useState([]);
  const [end, SetEnd] = useState(24);
  const [hideButton, SetHideButton] = useState(false);
  const images = [
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
    {
      img: img1,
      name: "Title here show",
      price: 5,
    },
  ];
  const length = images.length;
  useEffect(() => {
    const splicedImages = images.splice(0, 12);
    SetImages(splicedImages);
  }, []);

  const LoadMoreIamges = () => {
    const splicedImages = images.splice(0, end);
    console.log("updatedImages -> ", splicedImages);
    SetImages(splicedImages);
    SetEnd(end + 12);
    if (end > length) {
      SetHideButton(true);
    }
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
              The Mongrels™ are a 2,999 piece NFT collection on the Cardano™ blockchain.  These NFT's are your access to the Mongrels™ / Valkry™ ecossytem including our community, events, and experiences.
            </p>
            <p>
              The Mongrels™ NFT collection is currently minting and can be purchased on secondary markets such as JPG.STORE.  Visit our partner SATURNNFT.IO if you are interested in minting Mongrels!
            </p>
          </div>
          <div class="col-12 p-0">
            <a href="https://saturnnft.io/mint/e3cf323e-e535-47fc-afb2-3313595f5b03">
              <img class="saturn-nft" src="https://mongrels.wtf/saturn-nft.jpg" alt="" />
            </a>
          </div>
        </div>
        <div class="row filters">
          <div class="col-md-6 col-sm-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>BACKGROUND</option>
              <option value="1">FUR</option>
              <option value="2">MOUTH</option>
              <option value="3">EYES</option>
              <option value="4">GEAR</option>
              <option value="5">ACCESSORY</option>
              <option value="6">HEAD</option>
            </select>
          </div>
          <div class="col-md-6 col-sm-6">
            <input
              type="email"
              class="form-control search"
              id="exampleFormControlInput1"
              placeholder="Search Collection"
            />
          </div>
        </div>
        <div class="row">
          {Images &&
            Images.map((item, i) => (
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card-gray">
                  <img src={item.img} alt="" />
                  <div class="">
                    <h3>{item.name}</h3>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div class="row">
          {!hideButton ? (
            <div class="col-12">
              <button onClick={LoadMoreIamges} class="btn btn-Mongerels">
                View More Mongrels
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Mongrel;
