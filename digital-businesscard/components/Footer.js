import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/slvschwrz/">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="footer-icon" />
      </a>
      <a href="https://www.instagram.com/slvschwrz/">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icon" />
      </a>
      <a href="https://github.com/silvioschwarz/">
        <FontAwesomeIcon icon={faGithub} size="2x" className="footer-icon" />
      </a>
    </footer>
  );
}
