import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const Cards2 = ({ ele, remove }) => {
  return (
    <div className="mb-8 w-[80%] lg:w-[300px] h-[200px] flex">
      <div className="w-[50%] mb-1">
        <img className="w-[100%] h-[200px]" src={ele.img} alt={ele.title} />
      </div>
      <div className="pl-4 w-[40%] flex flex-col justify-between py-2">
        <div>
          <h2 className="h-[48px]">{ele.title}</h2>
        </div>
        <div className="flex flex-col gap-2 justify-evenly mt-1 items-center">
          <h3 className="bg-white text-black px-3 py-1 rounded-lg">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> {ele.price}
          </h3>
          <button
            className="bg-orange-400 px-2 py-1 font-semibold rounded-lg cursor-pointer active:scale-90"
            onClick={() => remove(ele)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
