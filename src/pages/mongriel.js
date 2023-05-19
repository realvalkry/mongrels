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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
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
                View More Mongerels
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
