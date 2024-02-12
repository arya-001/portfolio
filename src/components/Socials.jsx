import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaSquareXTwitter size={30} />
        </>
      ),
      href: "https://twitter.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <RiInstagramFill size={30} />
        </>
      ),
      href: "https://instagram.com",
      style: "rounded-tr-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black" +
              " " +
              style
            }
            download={download}
            target="_blank"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
