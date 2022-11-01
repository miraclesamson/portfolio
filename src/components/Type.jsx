import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Hi, I'm Miracle Samson."],
        autoStart: true,
        loop: true,
        pauseFor: 2500,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
