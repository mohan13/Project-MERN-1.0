import React from "react";

import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Icon from "../../../UI/icon";
import Lbanner from "./Lbanner";
import Card from '../Card/Cdata'
import { LeftNavData } from "./LeftNav";
const Left = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-Start bg-stone-200 shadow-sm rounded-sm">
        {LeftNavData?.map((val, i) => {
          return (
            <div
              key={i}
              className="hover:bg-pink-600 hover:drop-shadow-lg px-3 py-2 mr-4 duration-500"
            >
              {val.title}
            </div>
          );
        })}
      </div>
      <div>
        <Lbanner />
      </div>
      <div className="flex justify-start mt-8 my-4">
        <p className="text-xl font-bold mr-4">Share on:</p>
        <div className="grid grid-cols-3 gap-5">
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
        <h2>Related Courses</h2>
        <div className="flex items-center">
          <div>
            <FaChevronLeft color="white" className="h-6 w-6 py-1 bg-pink-600 rounded-full mr-2 hover:cursor-pointer" />{" "}
          </div>
          <div>
            <FaChevronRight color='white' className="h-6 w-6 py-1 bg-pink-600 rounded-full hover:cursor-pointer" />
          </div>
        </div>
      </div >
      <Card className='grid grid-cols-2'/>
      </div>
    </div>
  );
};

export default Left;
