import React from "react";
import { NavData } from "../NavData";
import NavItem from "../navItem/navItem";
const NavItems = ({from}) => {
  return (
    <div className={`flex ${from==='sidebar'?'flex-col text-pink-600 bg-white  px-10 py-2 text-center  h-screen text-center':null} justify-evenly `}>
      {NavData?.map((val, index) => { 
        return (
          <div key={index} className="text-lg flex  ">
            <NavItem icon={val.icon} path={val.path} title={val.title} />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
