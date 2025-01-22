import React, { createContext, useEffect, useState } from "react";
import "../Util/localStorage";
import { setLocalStorage, getLocalStorage } from "../Util/localStorage";

export const ProdContext = createContext();

const ProdProvider = ({ children }) => {
  // setLocalStorage();

  const [siteData, setSiteData] = useState({
    booksData: [],
    cartData: [],
  });

  useEffect(() => {
    const { booksData, cartData } = getLocalStorage();
    setSiteData({ booksData, cartData });
  }, []);

  const handleCart = (ele) => {
    const updateCartData = [...siteData.cartData, ele];
    setSiteData({
      ...siteData,
      cartData: updateCartData,
    });
    localStorage.setItem("cartData", JSON.stringify(updateCartData));
  };

  const remove = (ele) => {
    const updateCartData = siteData.cartData.filter(
      (item) => item.id !== ele.id
    );
    setSiteData({ ...siteData, cartData: updateCartData });
    localStorage.setItem("cartData", JSON.stringify(updateCartData));
  };

  return (
    <div>
      <ProdContext.Provider value={{ ...siteData, handleCart, remove }}>
        {children}
      </ProdContext.Provider>
    </div>
  );
};

export default ProdProvider;
