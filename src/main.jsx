import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProdProvider from "./ProdProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProdProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProdProvider>
  </StrictMode>
);
