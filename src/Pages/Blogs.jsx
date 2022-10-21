import React from "react";
import video from "../Videos/BARBER'S SHOP - Google Chrome 2022-10-13 15-39-05 (online-video-cutter.com).mp4";

export default function Blogs() {
  return (
    <div className=" ">
      <div className=" flex items-center justify-center px-10 py-7  max-w-6xl mx-auto ">
        <p
          className="text-white uppercase font-bold text-6xl
        "
        >
          my blog
        </p>
      </div>
      <div
        className=" bg-white w-3/4 rounded-md shadow-md 
      flex flex-col items-center justify-center px-10 py-12 
      max-w-6xl mx-auto "
      >
        <h1
          className="text-2xl font-bold mb-5
        "
        >
          Using basic HTML, CSS & JAVASCRIPT to create a simple Barber's Shop
        </h1>
        <video
          src={video}
          width="750"
          height="500"
          controls
          className="overflow-hidden"
        ></video>
        <div className="flex space-x-4">
          <p className="text-lg">Repository is available on Github</p>
          <a
            href="https://github.com/miraclesamson/BABERS-SHOP"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 text-xl hover:text-red-800 transition
          ease-in-out uppercase hover:underline"
          >
            Link
          </a>
        </div>
      </div>
      <div className="">hello world</div>
    </div>
  );
}
