import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import my from "../Images/my.png";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <div className="container w-4/5 mx-auto pt-[9em]">
      <h1 className="text-5xl font-bold text-center uppercase pt-20 text-blue-500">
        About Me{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        <div>
          <h1 className="text-blue-500 text-3xl uppercase font-bold">
            Personal Info
          </h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-lg">
              <p className="text-blue-500 my-4">
                First Name: <span className="text-white">Miracle Samson</span>
              </p>
              <p className="text-blue-500 my-4">
                Age: <span className="text-white">28 Years</span>
              </p>
              <p className="text-blue-500">
                Freelance: <span className="text-white">Available</span>
              </p>
              <p className="text-blue-500 my-4 flex">
                <BsInstagram className="text-white text-2xl bg-rose-500 h-9 rounded-md w-8" />
                : <span className="text-white">@miracle_samson0</span>
              </p>
              <p className="text-blue-500 my-4 flex gap-2">
                <TfiYoutube className="text-white text-2xl bg-red-400 h-9 rounded-md w-8" />
                :<span className="text-white">miracle_samson0</span>
              </p>
            </div>
            <div className="text-lg">
              <p className="text-blue-500 my-4">
                Last Name: <span className="text-white">Ogunmola</span>
              </p>
              <p className="text-blue-500 my-4">
                Nationality: <span className="text-white">NIGERIAN</span>
              </p>
              <p className="text-blue-500 my-4">
                Email:{" "}
                <span className="text-white">miraclesamon16@gmail.com</span>
              </p>
              <p className="text-blue-500 my-4">
                Twitter: <span className="text-white">@Frontend_samson</span>
              </p>
              <p className="text-blue-500 my-4">
                Languages: <span className="text-white">English</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-80 h-96 bg-center bg-cover ">
            <img src={my} width={400} height={550} alt="miracle" />
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center uppercase font-bold mt-20 text-white">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 pb-20 text-white">
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={80}
            text={`80%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">HTML</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={90}
            text={`90%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">CSS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={80}
            text={`80%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">JavaScript</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={50}
            text={`50%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">NextJS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={10}
            text={`10%`}
            styles={buildStyles({
              pathColor: `#db1616`,
              textColor: `#db1616`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">MongoDB</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={60}
            text={`60%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">Express JS</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={85}
            text={`85%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">React</h1>
        </div>
        <div className=" w-56 h-56 p-4 flex flex-col justify-center items-center">
          <CircularProgressbar
            value={70}
            text={`70%`}
            styles={buildStyles({
              pathColor: `#0ceb83`,
              textColor: `#0ceb83`,
              trailColor: "#262626",
            })}
          />
          <h1 className="text-2xl font-bold mt-4">Nodejs</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
