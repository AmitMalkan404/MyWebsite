import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebookSquare,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow(props) {
  return (
    <div className="social-container">
      <a target="_blank" rel="noopener noreferrer" 
        href="https://www.linkedin.com/in/amit-malkan/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a target="_blank" rel="noopener noreferrer" 
        href="https://github.com/AmitMalkan404"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/amit.malkan.1/" className="facebook social">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;