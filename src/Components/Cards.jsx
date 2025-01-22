import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ ele, handleCart }) => {
  return (
    <div className="mb-8 w-[40%] lg:w-[15%] h-[288px]">
      <div className="w-[100%] mb-1">
        <img className="w-[100%] h-[200px]" src={ele.img} alt={ele.title} />
      </div>
      <div>
        <h2 className="h-[48px]">{ele.title}</h2>
      </div>
      <div className="flex justify-evenly mt-1 items-center">
        <h3 className="bg-white text-black rounded-lg px-3 py-1">
          <FontAwesomeIcon icon={faIndianRupeeSign} /> {ele.price}
        </h3>
        <button
          className="bg-orange-400 px-2 py-1 font-semibold rounded-lg cursor-pointer active:scale-90"
          onClick={() => handleCart(ele)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
