import React from "react";
import Logo from "../Images/LOGO.PNG";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-md sticky top-0 z-40 h-11">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src={Logo} alt="" className="h-10 cursor-pointer rounded" />
        </div>
        <div>
          <ul className="flex flex-row space-x-8">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/about-me") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/about-me")}
            >
              AboutMe
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/skills") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/skills")}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/projects") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/projects")}
            >
              Projects
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/contact-us") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/contact-us")}
            >
              ContactMe
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
