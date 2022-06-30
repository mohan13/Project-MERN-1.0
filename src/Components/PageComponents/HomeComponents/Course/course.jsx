import React, { useState } from "react";
import { courseData } from "./courseData";
import { InputData } from "./inputData";
const Course = () => {
  const [Item, setItem] = useState(courseData);
  // const FilterItem = (cateItem) => {
  //   const updateItem = courseData.filter((curItem) => {
  //     return curItem.course === cateItem;
  //   });
  //   setItem(updateItem);
  // };
  return (
    <div className="mx-4">
      <h2 className="my-5">Our Popular Courses</h2>
      {/* <div className="flex justify-evenly my-8 ">
        <button onClick={() => setItem(courseData)}>All</button>
        <button onClick={() => FilterItem("python")}>Python</button>
        <button onClick={() => FilterItem("MERN")}>MERN</button>
        <button onClick={() => FilterItem("webdesign")}>Web Design</button>
      </div> */}
      <div className="flex justify-between md:justify-evenly w-full  my-8 ">
        {InputData?.map((val, i) => {
          return (
            <div key={i}>
              <input
                type={val.type}
                placeholder={val.placeholder}
                className="outline-none md:w-64 xl:80 w-24 text-sm p-1 bg-stone-200 border-b-2 border-pink-600"
              />
            </div>
          );
        })}

        <button
          type="submit"
          className="outline-none text-sm  p-1 bg-pink-600"
        >
          Search
        </button>
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {Item?.map((val, i) => {
          return (
            <div
              key={i}
              className="rounded-lg border hover:shadow-xl transition duration-500 ease-in-out  w-full"
            >
              <div className="">
                <img src={val.image} alt="" className="h-full " />
              </div>
              <div className=" text-left py-3 pl-4 hover:drop-shadow-lg leading-7 text-md">
                <h1 className="text-pink-600">{val.title}</h1>
                <p>{val.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-evenly ">
        <h2>Prev</h2>
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>...</h2>
        <h2>next</h2>
      </div> */}
    </div>
  );
};

export default Course;
