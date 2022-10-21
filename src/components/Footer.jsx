import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
  return (
    <div
      className="h-28  text-center
    text-xl  bg-gray-200 w-full "
    >
      <p className="flex justify-center items-center px-3 pt-8 max-w-6xl mx-auto space-x-4">
        <a
          href="https://www.youtube.com/channel/UC-JkjlauvgKAcFyF--rfv7g"
          className="youtube social text-red-600"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social text-blue-400"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/"
          className="instagram social text-red-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://wwww.twitter.com"
          className="twitter social text-blue-600"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="Github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </p>
      <span className="flex justify-center items-center px-3  max-w-6xl mx-auto">
        @miraclesamson16@gmail.com
      </span>
    </div>
  );
}
