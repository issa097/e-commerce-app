import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import stor from "./redux/stor";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={stor}>
      <App />
    </Provider>
  </React.StrictMode>
);
