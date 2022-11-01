import React from "react";
import my from "../Images/my.png";

import Resume from "../Images/Resume.pdf";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-center flex-wrap items-center px-2 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[50%] lg:w-[50%] mb-12 md:mb-6 pt-[9em]">
          <h1 className="text-6xl font-bold mb-5 text-white mt-6">
            <Type />
          </h1>
          <p className="text-xl text-gray-100 mb-20">
            I'm a frontend developer from Nigeria,having an experience of
            building Web applications with JavaScript / Reactjs / Nodejs / React
            Native and some other cool libraries and frameworks.
          </p>
          <div className=" flex items-center gap-5 justify-center flex-wrap">
            <button
              className="px-7 py-3 bg-blue-600
         text-white rounded text-sm uppercase shadow-2xl
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg 
          transition duration-150 ease-in-out  text-center "
            >
              Contact Me
            </button>
            <button
              className=" bg-blue-600 text-white rounded
              uppercase shadow-2xl  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg 
              transition duration-150 ease-in-out  text-center items-center px-7 py-3"
            >
              <a className="button text-white" href={Resume} download={Resume}>
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="MyAvatar w-full md:w-[67%] lg:w-[40%]  border-spacing-y-2">
          <img src={my} alt="" className="justify-center " />
        </div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIAL MEDIA</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
