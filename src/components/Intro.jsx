import React from "react";
import logo from "../assets/logo.png";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="introduction">
      
      <img src={logo} alt="logo" className="logoimg" />

      <h3>
        Hi there! I'm
        <Typewriter
          options={{
            strings: ["Abdul Ahad", "Front End Developer"],
            autoStart: true,
            loop: true,
          }}
          style={{ display: "inline" }}
        />
      </h3>

      <div class="desc">
  <p>
    Welcome to my portfolio! I am currently in my final semester pursuing a Bachelor's degree in <span>Computer Science</span>, with a commendable academic record. My passion lies in frontend web development, where I excel in a range of technologies including <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>Bootstrap</span>. Particularly proficient in <span>React.js</span>, I have honed my skills in crafting dynamic and responsive user interfaces. Driven by a thirst for knowledge and innovation, I am currently delving into the intriguing world of <span>React Native</span>, fascinated by its potential for mobile application development. Through my dedication to continuous learning and exploration, I aim to further expand my expertise and contribute meaningfully to the field of web and mobile development.
  </p>
</div>


      <ul className="socials">
        <li>
          <a href="mailto:abdulahad.available@gmail.com">
            <i className="ri-mail-line"></i>
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/AbdulAhadCodes" target="_blank">
            <i className="ri-github-line"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abdul-ahad-available" target="_blank">
            <i className="ri-linkedin-fill"></i>
            <span>LinkedIn</span>
          </a>
        </li>

        
        <a href="\public\cv.pdf" download="cv.pdf" locale={false} className="download-button">
        <button>Download CV</button>
        </a>
        
      </ul>
    </div>
  );
};

export default Intro;
