import React from 'react'
import Img2 from "../../../Images/python1.webp";

const Cdata = () => {
    const data =[
        {
            image: Img2,
            title: "Python",
            subTitle: "MERN with Full Stack",
            course: "python",
            category: "beginner",
          },
          {
            image: Img2,
            title: "Web Design",
            subTitle: "MERN with Full Stack",
            course: "webdesign",
            category: "beginner",
          },
    ]
  return (
    <div className='grid grid-cols-1 m-4 md:flex justify-start '>
        {
            data?.map((val,i)=>{
                return(
                    <div
              key={i}
              className="mt-8 mr-1 md:w-48 rounded-lg border hover:shadow-xl transition duration-500 ease-in-out"
            >
              <div>
                <img src={val.image} alt=""  />
              </div>
              <div className=" text-left pl-4 hover:drop-shadow-lg leading-7 text-sm">
                <h1 className="text-pink-600">{val.title}</h1>
                <p>{val.subTitle}</p>
              </div>
            </div>
                )
            })
        }
    </div>
  )
}

export default Cdata