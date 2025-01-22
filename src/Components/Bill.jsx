import React, { useEffect, useState } from "react";

const Bill = ({ cartsData }) => {
  const [tprice, setTPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartsData.forEach((ele) => {
      total += ele.price;
    });
    setTPrice(total);
  }, [cartsData]);

  const convenience = 99;

  return (
    <div className="border-2 lg:w-[400px] lg:mt-[17vh] w-[80%] mb-5 h-[27vh]">
      <div className="border-b-2 h-[18%] pt-2 lg:pt-0 text-center">
        <h1 className="text-2xl font-bold h-[100%] text-orange-400">
          Price Details
        </h1>
      </div>
      <div className="text-[17px] py-2 px-2 h-[82%]">
        <div className="flex justify-between">
          <span>Total</span>
          <span className="tprice">{tprice}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount on MRP</span>
          <span className="dprice">0</span>
        </div>
        <div className="flex justify-between">
          <span>Discounted Price</span>
          <span className="ddprice">{tprice}</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span className="cdprice">0</span>
        </div>
        <div className="flex mb-2 justify-between">
          <span>Convenience Charge</span>
          <span className="cprice">{convenience}</span>
        </div>

        <div className="border-t-2 pt-3 lg:pt-0 flex justify-between">
          <span className="flabel">Final Price: </span>
          <span className="fprice">{tprice + convenience}</span>
        </div>
      </div>
    </div>
  );
};

export default Bill;
