import React from "react";
import Couter from "./component/Couter";
import "./style/fontSize.scss";
import "./style/color.css";
import Backg from "../public/image/cao-trang-1-866.jpg";
export const App = () => {
  return (
    <>
      <h1 className="color">React TypeScript Webpack Starter Template01</h1>
      <p className="fontSize">{process.env.BUI_KHAC_TAO}</p>
      <div className="imgdiv">
        <img src={Backg} alt="" />
      </div>
      <Couter />
      <div className="bg"></div>
      <div>
        <ul>
          <li>
            <a href="/">bui thi a</a>
          </li>
          <li>
            <a href="/">bui thi na</a>
          </li>
          <li>
            <a href="/">bui thi tao</a>
          </li>
        </ul>
      </div>
    </>
  );
};
