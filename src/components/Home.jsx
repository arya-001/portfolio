import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import arya2 from "../assets/arya2.jpg";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-slate-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">I'm a Software Developer</h2>
          <p className=" text-gray-500 py-3 max-w-md">
            Currently, I love to work on Mobile Application using technologies
            like Flutter and Web Applications using React, Tailwind with
            NodeJs-ExpressJS and MongoDB.
          </p>
          <div>
            <Link to="work" smooth duration={500}  className="group text-black text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-slate-500 via-gray-300 to-gray-500">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdDoubleArrow size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={arya2}
            alt="my picture"
            className="rounded-xl mx-auto w-2/3 md: w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
