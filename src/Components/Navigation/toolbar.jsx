import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Icon from "../UI/icon";
import NavItems from "./NavItems/NavItems";
import Side from "./sidebar";
import Logo from "../Images/logo.webp";
const Toolbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  let model;
  if (Sidebar) {
    model = (
      <div
        onClick={() => setSidebar(false)}
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-screen z-10 absolute bg-green-400 top-0 left-0"
      >
        
        <Side />
      </div>

    );
  }
  return (
    <div className="flex justify-between md:grid md:grid-cols-2 px-4  items-center py-2">
      {model}
      <div className="w-24 cursor-pointer md:w-60 ">
        <img className="bg-pink-600 rounded-sm p-2" src={Logo} alt="" />
      </div>

      <div className="hidden md:flex">
        {" "}
        <NavItems className="" />
      </div>
      <div onClick={() => setSidebar(true)}>
        <Icon
          i={<FaBars className="w-full flex cursor-pointer md:hidden h-full" />}
        />
      </div>
    </div>
  );
};

export default Toolbar;
