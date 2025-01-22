import React, { useEffect } from "react";
import Cards from "../Components/Cards";

const Products = ({ prodData }) => {
  // console.log(prodData.booksData)

  // const handleCart = (ele) => {
  //   console.log(ele);
  //   console.log(!prodData.cartData ? [ele] : [...prodData.cartData, ele]);
  //   prodData.cartData = [...prodData.cartData, ele];
  // };

  return (
    <div className="text-white flex flex-wrap justify-evenly mt-[14.9vh] gap-4 px-4 pt-10">
      {prodData.booksData &&
        prodData.booksData.map((ele, index) => {
          return (
            <Cards ele={ele} handleCart={prodData.handleCart} key={index} />
          );
        })}
    </div>
  );
};

export default Products;
