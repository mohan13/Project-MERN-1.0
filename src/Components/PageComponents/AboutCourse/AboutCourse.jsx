import React from "react";
import Right from "./Right/right";
import Left from "./Left/left";
const AboutCourse = () => {
  return (
    <div className="grid grid-cols-3 mx-4 gap-4">
      <div className="col-span-2">
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};

export default AboutCourse;
