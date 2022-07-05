import React from "react";
import Buttom from "../Buttom";
// import {
//   FaFacebookSquare,
//   FaGooglePlusSquare,
//   FaInstagramSquare,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import Icon from "../../../UI/icon";
import Lbanner from "./Lbanner";
// import Card from '../Card/Cdata'
import { LeftNavData } from "./LeftNav";
const Left = () => {
  return (
    <div className="w-full">
      <div className="hidden md:flex justify-Start bg-stone-200 shadow-sm rounded-sm">
        {LeftNavData?.map((val, i) => {
          return (
            <div
              key={i}
              className=" hover:bg-pink-600 hover:drop-shadow-lg px-3 py-2 mr-4 duration-500"
            >
              {val.title}
            </div>
          );
        })}
      </div>
      <div>
        <Lbanner />
      </div>
      <div className="hidden md:grid">
        <Buttom />
      </div>
    </div>
  );
};

export default Left;
