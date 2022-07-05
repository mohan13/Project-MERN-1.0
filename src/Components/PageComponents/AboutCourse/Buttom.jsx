import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Card from "../AboutCourse/Card/Cdata";
import Icon from "../../UI/icon";
const Buttom = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex items-center justify-start mt-8 my-4">
          <p className="text-xl font-bold mr-4">Share on:</p>
          <div className="flex">
            <Icon
              i={
                <FaInstagramSquare className="h-full w-full hover:color-pink-600" />
              }
            />
            <Icon i={<FaFacebookSquare className="h-full w-full" />} />
            <Icon i={<FaGooglePlusSquare className="h-full w-full" />} />
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-8">
            <p className="text-xl md:text-3xl font-bold">Related Courses</p>
            <div className="flex items-center">
              <div>
                <FaChevronLeft
                  color="white"
                  className="w-5 h-5 md:h-6 md:w-6 py-1 bg-pink-600 rounded-full mr-2 hover:cursor-pointer"
                />
              </div>
              <div>
                <FaChevronRight
                  color="white"
                  className="w-5 h-5 md:h-6 md:w-6 py-1 bg-pink-600 rounded-full hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Buttom;
