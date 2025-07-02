import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyContext, store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </MyContext.Provider>
);
