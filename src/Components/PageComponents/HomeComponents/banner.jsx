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
          <div key={i} className="w-full">
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
            <div className="grid grid-cols-1  py-4 md:grid-cols-3 lg:p-4 lg:items-center bg-stone-200">
              <div className=" md:col-span-2 lg:pr-28 text-left ">
                <h1 className="text-pink-600 lg:text-xl">{val.title}</h1>
                <h1 className="text-2xl  md:text-4xl lg:text-5xl"> {val.subTitle}</h1>
                <p className="leading-6 text-sm lg:text-xl mb-2">{val.para}</p>
                <button className="rounded-sm py-1 my-2  ">BOOK NOW</button>
              </div>
              <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 ">
                <div className="lg:h-60 md:col-span-2 lg:mt-4 lg:mt-4">
                  <img className="md:h-full mx-auto" src={val.Image} alt="" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:mr-1 text-left md:mb-12">
                  <div className="bg-pink-600 pl-2 lg:py-1 lg:px-1 leading-8">
                    <h4 className="text-sm ">Course Start</h4>
                    <h1>20 Feb. 2012</h1>
                  </div>
                  <div className="bg-yellow-300 leading-8 pl-2">
                    <h3>Course Fee</h3>
                    <h1>Rs. 20000</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
