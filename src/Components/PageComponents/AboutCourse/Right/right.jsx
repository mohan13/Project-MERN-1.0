import React from "react";
import { rightData,subData } from "./rightData";
import Rform from '../Form/mainForm'
// import Icon from "../../../UI/icon";
const Right = () => {
  return (
   <div>
     <div className="border md:p-0 p-2 ">
      <h1 className="text-center py-2 text-white font-bold text-md bg-pink-600 py-2">Upcomming Class Schedule</h1>
      <div className=" px-2">
        {rightData?.map((val, i) => {
          return (
            <div key={i} className="flex text-sm mt-6 justify-between">
              <div className="flex items-center">
                {val.rIcon} 
                <p className="ml-3">{val.title}</p>
              </div>
              <div className="">{val.data}</div>
            </div>
          );
        })}
        <div className="mb-10">  <h1 className="text-left text-md mt-10" >Upcomming Classes</h1>
        {subData?.map((val,i)=>{
          return(
            <div key={i}  className="flex text-md mt-6 justify-between">
              <div className="flex items-center">
                {val.rIcon}
                <p className="ml-2"> {val.title}</p>
              </div>
              <div className="">{val.data}</div>
            </div>
          )
        })}</div> 
      </div>
    </div>
    <Rform/>
   </div>
  );
};

export default Right;
