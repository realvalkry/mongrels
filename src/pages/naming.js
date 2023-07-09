import img1 from "../_assets/images/img-1254.jpg";
import React, { useState, useEffect } from "react";
const Naming = () => {
  const [Images, SetImages] = useState([]);
  const [end, SetEnd] = useState(24);
  const [hideButton, SetHideButton] = useState(false);
  const images = [
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Title here show",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: 5,
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
    },
    {
      img: img1,
      name: "Mongrels #",
      price: "ADA",
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
