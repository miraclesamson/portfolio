import React from "react";
import { Button } from "react-bootstrap";
import Capture from "../Images/Capture.PNG";
import Capture1 from "../Images/Capture1.PNG";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="container w-4/5 mx-auto text-white pt-[9em]">
      <h1 className="text-5xl font-bold text-center uppercase pt-20">
        My <span className="">Portfolio</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pb-28">
        <div className="portfolio_card hover:-translate-y-3 duration-300">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url(${Capture}) center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-yellow-400 duration-300">
              Realtor Clone Website
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              The app is ReactJs and firebase application
            </p>
            <a
              href="https://github.com/miraclesamson/realtor-clone"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center 
              no-underline text-center bg-blue-600 ml-9 px-2 h-8
              w-[100px] rounded-md text-white shadow-md hover:bg-blue-900"
            >
              <BsGithub /> &nbsp; GitHub
            </a>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-t-md"
            style={{
              background: `url(${Capture1}) center center / cover`,
            }}
          ></div>
          <div className="py-4 px-6 bg-stone-800">
            <h1 className="text-2xl font-bold py-2 cursor-pointer hover:text-blue-500 duration-300">
              Barber's Website
            </h1>
            <p className="text-gray-300 font-bold pb-5">
              HTML, CSS and JavaScript
            </p>
            <a
              href="https://github.com/miraclesamson/BABERS-SHOP"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center 
              no-underline text-center bg-blue-600 ml-9 px-2 h-8
              w-[100px] rounded-md text-white shadow-md hover:bg-blue-900"
            >
              <BsGithub /> &nbsp; GitHub
            </a>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/science/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/sci/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/tech/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/edu/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/project/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/web/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="portfolio_image w-full h-56 rounded-xl"
            style={{
              background: `url('https://picsum.photos/seed/crypto/900/600') center center / cover`,
            }}
          >
            <div className="image_overlay rounded-xl">
              <h1>Portfolio project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
