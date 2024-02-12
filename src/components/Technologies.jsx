import React from "react";
import nodejs from "../assets/nodejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwind-css.png";
import mongodb from "../assets/mongodb.png";
import flutter from "../assets/flutter.png";

const Technologies = () => {

 const techs =[
  {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-500'
  },{
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-500'
  },{
    id: 3,
    src: javascript,
    title: 'JAVASCRIPT',
    style: 'shadow-yellow-500'
  },{
    id: 4,
    src: react,
    title: 'REACT JS',
    style: 'shadow-blue-600'
  },{
    id: 5,
    src: nodejs,
    title: 'NODE JS',
    style: 'shadow-green-500'
  },{
    id: 6,
    src: tailwindcss,
    title: 'TAILWIND-CSS',
    style: 'shadow-sky-400'
  },{
    id: 7,
    src: mongodb,
    title: 'MONGODB',
    style: 'shadow-green-600'
  },{
    id: 8,
    src: flutter,
    title: 'FLUTTER',
    style: 'shadow-blue-500'
  }
 ]

  return (
    <div
      name="technology"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Technologies
        </p>

        <p className="py-6"> These are technologies I've worked with</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
            techs.map(({id, src, title, style}) => (
<div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Technologies;
