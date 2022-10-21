import React from "react";
import my from "../Images/my.png";
import { useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import Resume from "../Images/Resume.pdf";
import Footer from "../components/Footer";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center flex-wrap items-center px-2 py-12 max-w-6xl mx-auto ">
      <div className="md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
        <h1 className="text-6xl font-bold mb-5 text-white mt-6">
          Hi, I'm Miracle Samson.
        </h1>
        <p className="text-xl text-gray-100">
          I'm a frontend developer from Nigeria,having an experience of building
          Web applications with JavaScript / Reactjs / Nodejs / React Native and
          some other cool libraries and frameworks.
        </p>
        <div>
          <button
            className="px-7 py-3 bg-blue-600
         text-white rounded text-sm uppercase shadow-2xl
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg 
          transition duration-150 ease-in-out  text-center mb-6 mt-24"
            onClick={() => navigate("/contact-us")}
          >
            Contact Me
          </button>
          <button
            className="button  bg-blue-600 text-white rounded
              uppercase ml-4 shadow-2xl  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg 
              transition duration-150 ease-in-out  text-center px-7 py-3"
          >
            <a className="button" href={Resume} download={Resume}>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%]  border-spacing-y-2">
        <img src={my} alt="" className="w-full rounded-full bg-blue-300" />
      </div>
      <Blogs />
      <Footer />
    </div>
  );
}
