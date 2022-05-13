import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <footer>
        <span>
          Designed & built by Jasmine Elkins{" "}
          <a
            href="https://github.com/jasmineelkins"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footerIcon" />
          </a>{" "}
          & Kristen Cadacio{" "}
          <a
            href="https://github.com/cadakris"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footerIcon" />
          </a>{" "}
          || May 2022
        </span>
      </footer>
    </>
  );
}

export default Footer;
