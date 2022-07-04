import React from "react";
import { NavData } from "../NavData";
import NavItem from "../navItem/navItem";
const NavItems = () => {
  return (
    <div className="w-full flex justify-between ">
      {NavData?.map((val, index) => {
        return (
          <div key={index} className="text-pink-600 text-lg ">
            <NavItem icon={val.icon} path={val.path} title={val.title} />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
