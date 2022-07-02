import React from "react";
import {FaFacebookSquare,FaGooglePlusSquare,FaInstagramSquare} from 'react-icons/fa'
import Icon from '../../../UI/icon'
import Lbanner from "./Lbanner";
import { LeftNavData } from "./LeftNav";
const Left = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-Start bg-stone-200 shadow-md rounded-sm">
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
      <div >
        <Lbanner />
      </div>
      <div className="flex justify-start my-4">
        <p className="text-xl font-bold mr-4">Share on:</p>
        <div className="grid grid-cols-3 gap-5">
          <Icon i={<FaInstagramSquare className="h-full w-full"/>}/>
          <Icon i={<FaFacebookSquare className="h-full w-full"/>}/>
          <Icon i={<FaGooglePlusSquare className="h-full w-full"/>}/>
        </div>
      </div>
    </div>
  );
};

export default Left;
