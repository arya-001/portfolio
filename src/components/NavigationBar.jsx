import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import {BsFillPersonLinesFill   } 
from 'react-icons/bs'
import {Link} from "react-scroll"

const NavigationBar = () => {
  const [nav, setNav] = useState(false);


//   const foryou =[
//     {
//         id: 1,
//         child: (<>
//         Mail <IoIosMail size={30}/>
//         </>),
//         href: 'mailto:polasarya@gmail.com',
//         style: 'rounded-tr-md'
//     },
//     {
//         id: 2,
//         child: (<>
//         Resume <BsFillPersonLinesFill size={30}/>
//         </>),
//         href: '/resume.pdf',
//         style: 'rounded-tr-md',
//         download: true,
//     },

// ]

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "work",
    },
    // {
    //     id: 4,
    //     link:'contact',
    // },{
    //     id: 5,
    //     link:'resume',
    // },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black">
      <div className="Role">
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-100"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-5xl font-signature ml-2">AP</h1>
      <div className="Role">
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500  hover:scale-110 duration-100">
            Email
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500  hover:scale-110 duration-100">
            Resume
          </li>
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
       
      </div>
      {nav && (  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400">
      {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6"            >
             <Link onClick={() =>setNav(!nav)}
             to={link} smooth duration={500}> {link}</Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6">Email</li>
          <li className="px-4 cursor-pointer capitalize py-6">Resume</li>
        </ul>)}
     
    </div>
  );
};

export default NavigationBar;
