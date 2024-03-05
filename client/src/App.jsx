import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet,useLocation } from "react-router";

function App() {
  const location = useLocation();

  const shouldShowHeaderFooter = () => {
    return (!location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup'));
  };

  return (
    <>
      {shouldShowHeaderFooter() && <Header />}
      <Outlet />
      {shouldShowHeaderFooter() && <Footer />}
    </>
  );
}


export default App;
