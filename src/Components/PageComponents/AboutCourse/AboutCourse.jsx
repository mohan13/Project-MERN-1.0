import React from "react";
import Right from "./Right/right";
import Left from "./Left/left";
import Buttom1 from "./Buttom";
const AboutCourse = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:mx-6 md:gap-4">
      <div className=" md:h-full  md:col-span-2">
        <Left />
      </div>
      <div className="">
        <Right />
      </div>
      <div className="md:hidden">
      <Buttom1 />
        </div>
    </div>
  );
};

export default AboutCourse;
