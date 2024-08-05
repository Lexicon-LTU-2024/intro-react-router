import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { RouterProvider } from "react-router-dom";
import "./css/index.css";
import { router, routerWithJsx } from "./router";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router /> */}
    <RouterProvider router={routerWithJsx}/>
  </React.StrictMode>
);
