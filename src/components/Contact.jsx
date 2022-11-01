//contact.jsx

//contact.jsx
import React, { useState } from "react";
import {
  FaMapMarker,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/xjvzokpy";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 200);
  };

  if (submitted) {
    return (
      <div className="container w-4/5 mx-auto">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }
  return (
    <div className="container w-4/5 mx-auto text-white pt-[9em]">
      <h1 className="text-5xl font-bold text-center uppercase pt-20 text-white">
        Contact <span className="text-slate-200">Me</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pb-28">
        <div className="container">
          <h1 className="text-3xl uppercase font-bold">Get in Touch</h1>
          <p className="my-5">
            {`Need Something? Contact me or you can contact me at the below address`}
          </p>
          <div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-green-300 mr-5">
                <FaMapMarker />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-100">Address : </span>
                <span className="font-bold">Ondo, state Nigeria</span>
              </p>
            </div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-green-300 mr-5">
                <FaPhoneAlt />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-200">Phone : </span>
                <span className="font-bold">+234 9068602132</span>
              </p>
            </div>
            <div className="my-5 flex items-center">
              <h1 className="text-4xl text-green-300 mr-5">
                <FaEnvelope />
              </h1>
              <p className="flex flex-col">
                <span className="uppercase text-gray-200">Email</span>
                <span className="font-bold">miraclesamson16@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <form
          className="col-span-3 md:col-span-2"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex flex-wrap md:flex-nowrap">
            <input
              type="text"
              name="name"
              className="placeholder:uppercase bg-stone-800 my-2  rounded-full py-3 pl-4 w-full md:w-1/2 md:mr-4"
              placeholder="Your name"
            />
            <input
              type="email"
              name="email"
              className="placeholder:uppercase bg-stone-800  my-2 rounded-full py-3 pl-4 w-full md:w-1/2"
              placeholder="Your email"
            />
          </div>
          <input
            type="text"
            name="subject"
            className="placeholder:uppercase bg-stone-800 rounded-full py-3 my-6 pl-4 w-full"
            placeholder="Your subject"
          />
          <textarea
            className="placeholder:uppercase bg-stone-800 rounded-3xl py-3 pl-4 w-full h-48"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button className="h-14 w-56 mt-5 flex items-center justify-center uppercase border-2 border-blue-700 rounded-full hover:bg-white hover:text-black duration-300">
            <span className="mr-2 font-bold tracking-wide">Send Message</span>{" "}
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
