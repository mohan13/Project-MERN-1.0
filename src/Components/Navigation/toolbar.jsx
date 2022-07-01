import React from "react";
import {BiMenu} from 'react-icons/bi'
import NavItems from "./NavItems/NavItems";
import Logo from "../Images/logo.webp";
const toolbar = () => {
  return (
    <div className="grid grid-cols-2 items-center py-2">
      <div className="w-24 md:w-60">
        
        <img className="bg-black" src={Logo} alt="" />
      </div>
      {/* <div className="md:hidden ">< BiMenu/> </div> */}
      <div className="hidden md:flex">
        <NavItems />
      </div>
      
    </div>
  );
};

export default toolbar;
