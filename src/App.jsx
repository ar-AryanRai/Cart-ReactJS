import React, { useContext } from "react";
import Nav from "./Components/Nav";
import Products from "./Pages/Products";
import { ProdContext } from "./Context/ProdProvider";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const prodData = useContext(ProdContext);

  return (
    <div className="bg-[#1c1c1c] max-w-[100vw] min-h-[100vh] text-white">
      <Nav cartsData={prodData.cartData} />
      {/* <Products prodData={prodData} /> */}
      <Routes>
        <Route path="/" element={<Products prodData={prodData} />}></Route>
        <Route path="/cart" element={<Cart prodData={prodData} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
