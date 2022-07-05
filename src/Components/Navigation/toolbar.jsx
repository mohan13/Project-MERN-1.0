import React from "react";
import {FaBars} from 'react-icons/fa'
import Icon from "../UI/icon";
import NavItems from "./NavItems/NavItems";
import Logo from "../Images/logo.webp";
const toolbar = () => {
  return (
    <div className="flex justify-between md:grid md:grid-cols-2 px-4  items-center py-2">
      <div className="w-24 cursor-pointer md:w-60 ">
        <img className="bg-pink-600 rounded-sm p-2" src={Logo} alt="" />
      </div>
      
       <div className="hidden md:flex"> <NavItems className=""/></div>
      <div ><Icon i={<FaBars className="w-full flex cursor-pointer md:hidden h-full"/>}/></div>
      
    </div>
  );
};

export default toolbar;
