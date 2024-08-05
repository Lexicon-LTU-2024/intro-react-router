import { Outlet } from "react-router-dom";
import { AboutPage, HomePage, JoinUsPage } from "../pages";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

// <Outlet/> acts as a placeholder for future children routes to <App/>
