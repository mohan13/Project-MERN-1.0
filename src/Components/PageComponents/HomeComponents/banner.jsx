import React from "react";
import Hero from "../../Images/python1.webp";
const Banner = () => {
  const BannerData = [
    {
      Image: Hero,
      title: "Featured Course",
      subTitle: "Become a Full Stack Developer with MERN Stack",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className="drop-shadow-md">
      {BannerData?.map((val, i) => {
        return (
          <div key={i} className='w-full'>
            {/* <div
              // style={{
              //   backgroundImage: `url(${val.Image})`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              //   backgroundColor: "rgba(0,0,0,0.4)",
              // }}
              className="w-screen"
            >
              <div className="flex flex-col text-left md:w-2/4 md:ml-6 md:py-8 ">
                <div className="text-sm pr-16 md:text-lg">
                  <h1 className="text-pink-600">{val.title}</h1>
                  <h2 className=" my-2 text-lg   md:text-4xl">
                    {val.subTitle}
                  </h2>
                  <p className=" leading-6 text-sm">{val.para}</p>
                </div>
                <button className="rounded-sm my  ">BOOK NOW</button> */}
            <div className="grid grid-cols-2  items-center">
              <div className="text-lg f text-left">
               <h1 className="text-pink-600">{val.title}</h1>
               <h2 className="text-lg my-2 md:text-4xl"> {val.subTitle}</h2>
                <p className="leading-6 text-sm">
                {val.para}
                </p>
              </div>
              <div className="h-32 ">
                <img className="h-full mx-auto" src={val.Image} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
