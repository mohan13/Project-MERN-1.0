import React from "react";
import Right from "./Right/right";
import Left from "./Left/left";
const AboutCourse = () => {
  return (
    <div className="grid grid-cols-3 mx-4 h-screen gap-4">
      <div className="h-full col-span-2">
        <Left />
      </div>
      <div className="h-full">
        <Right />
      </div>
    </div>
  );
};

export default AboutCourse;
