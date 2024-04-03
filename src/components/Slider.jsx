"use client"; 
import Link from "next/link";
import Ticket from "./Ticket";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import i1 from "../imgs/s1.png";
import i2 from "../imgs/s2.png";
import i3 from "../imgs/s3.png";

const Sliderr = () => {
  const filteredItems = [
    {
      id: 1,
      img: i1,
      description: "camera",
      price: 200,
    },
    {
      id: 2,
      img: i2,
      description: "Phone",
      price: 100,
    },
    {
      id: 3,
      img: i3,
      description: "Laptop",
      price: 500,
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending my-5">
      <h2 className="spot-head">Collection Spotlight</h2>
      <p style={{color:"gray",width:"70%",margin:"auto"}}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        <div className="containerr">
          <div className="title-btns">
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
                <Ticket img={item.img}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sliderr;