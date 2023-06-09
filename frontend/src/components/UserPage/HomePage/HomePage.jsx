// HomePage.js

import React from "react";
import Footer from "../Footer/Footer";
import NewsInHomePage from "./NewsInHomePage/NewsInHomePage";
import "./HomePage.css";
import FPTlogo from "../../../asset/FPTlogo.png";
import NewNav from "../NewNav/NewNav";

function HomePage() {
  return (
    <div className="background-homepage">
      {/* <Navigate /> */}
      <NewNav />
      <h1 className="h1-center">Trang Chủ</h1>
      <div className="content">
        <div className="sidebar">
          <img className="logo" height={80} src={FPTlogo} alt="fpt" />
        </div>
        <div className="child-content">
          <div className="news">
            <NewsInHomePage />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
