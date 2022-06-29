import React from "react";
import Hero from "../../Images/hero.jpg";
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
          <div key={i}>
            <div
              style={{
                backgroundImage: `url(${val.Image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor:"rgba(0,0,0,0.4)"
              }}
              className="border-red-300"
            >
              <div className="flex flex-col text-left  w-2/4 ml-6 py-8 ">
                <div className=" text-xl">{val.title}</div>
                <h2 className=" my-2 text-4xl">{val.subTitle}</h2>
                <div className=" leading-6 text-md">{val.para}</div>
                <button className="rounded-sm w-40 mt-4 p-2 ">BOOK NOW</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
