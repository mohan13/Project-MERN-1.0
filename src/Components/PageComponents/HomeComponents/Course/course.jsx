import React,{useState} from "react";
import { courseData } from "./courseData";
// import { InputData } from "./inputData";
const Course = () => {
    const[Item,setItem] = useState(courseData);
    const FilterItem=(cateItem)=>{
        const updateItem = courseData.filter((curItem)=>{
            return curItem.course ===cateItem;
        });
        setItem(updateItem)
    }
  return (
    <div>
      <h2 className="my-5">Our Popular Courses</h2>
      {/* <div className="flex justify-center">
        {InputData?.map((val, i) => {
          return (
            <div key={i}>
              <input
                type={val.type}
                placeholder={val.placeholder}
                className="outline-none text-xl p-4 border-red-300"
              />
            </div>
          );
        })}
      </div> */}
      <div className="flex justify-evenly my-8 ">
        <button onClick={()=>FilterItem("python")}>Python</button>
        <button onClick={()=>FilterItem("webdesign")}>Web Design</button>
        <button onClick={()=>FilterItem("MERN")}>MERN</button>
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {Item?.map((val, i) => {
          return (
            <div key={i} className="drop-shadow-lg">
              <img src={val.image} alt="" />
              <div className="text-left py-3 pl-4 leading-7 text-md"  >
                <div className="text-purple-600">{val.title}</div>
                {val.subTitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
