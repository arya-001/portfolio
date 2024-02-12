import React from "react";
import nodejs from "../assets/nodejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwind-css.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nodejs,
    },
    {
      id: 2,
      src: html,
    },
    {
      id: 3,
      src: css,
    },
    {
      id: 4,
      src: reactjs,
    },
    {
      id: 5,
      src: javascript,
    },
    {
      id: 6,
      src: tailwindcss,
    },
  ];

  return (
    <div
      name="work"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div  key={id} className="shadow-md shadow-slate-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 px-12 py-0 my-0"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-2 py-0 m-4 duration-200 hover:scale-110">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
