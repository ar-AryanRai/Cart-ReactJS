import React, { useContext, useEffect, useState } from "react";
import Cards2 from "../Components/Cards2";
import Bill from "../Components/Bill";

const Cart = ({ prodData }) => {
  return (
    <div className="lg:flex lg:w-[100%] lg:justify-evenly gap-10">
      <div className="text-white flex lg:flex-col flex-wrap justify-center mt-[14.9vh] pt-10">
        {prodData.cartData.map((ele, index) => {
          return <Cards2 ele={ele} remove={prodData.remove} key={index} />;
        })}
      </div>
      <div className="text-white flex flex-wrap justify-center pt-4">
        <Bill cartsData={prodData.cartData} />
      </div>
    </div>
  );
};

export default Cart;
