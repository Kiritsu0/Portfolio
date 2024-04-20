import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoPython,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

function App() {
  const [condition, setCondition] = useState(true);
  const [mark_color, setMarkColor] = useState("#37484a");

  const header = "My Learning Journey";
  const letters = header.split("");

  const handleStory = () => {
    if (condition) {
      setCondition(false);
    } else {
      setCondition(true);
    }
    return;
  };

  const handleMark = () => {
    if (mark_color === "#37484a") {
      setMarkColor("#3badab");
    } else {
      setMarkColor("#37484a");
    }
  };

  return (
    <div className="App">
      <div id="home">
        <nav id="nav">
          <div id="welcome">
            <h2 title="Hussein Deeb's Portfolio">
              Welcome To My Front-End world
            </h2>
          </div>
          <div id="menu">
            <a href="#home" className="links">
              Home
            </a>
            <a href="#about" className="links">
              About me
            </a>
            <a href="#projects" className="links">
              Projects
            </a>
            <a href="#contacts" className="links">
              Contacts
            </a>
          </div>
        </nav>
        <div className="identification">
          <img id="image-1" src={process.env.PUBLIC_URL + "/image-1.jpg"} />
          <div className="paragraphs">
            <p id="p1">Hi,</p>
            <div id="p2">
              I'M <p className="hovered-spans">Hussein</p>{" "}
              <p className="hovered-spans">Deeb</p>
            </div>
            <div id="p3">
              a <p className="hovered-spans">Front-End</p>{" "}
              <p className="hovered-spans">Developer</p>
            </div>
          </div>
        </div>
        <div className="language-icons">
          <a href="/Portfolio/Resume.docx" download className="download">
              Download CV
          </a>
          <div className="tools">
            <span className="programming-tools" id="next">
              <TbBrandNextjs />
            </span>
            <span className="programming-tools" id="react">
              <BiLogoReact />
            </span>
            <span className="programming-tools" id="js">
              <BiLogoJavascript />
            </span>
            <span className="programming-tools" id="tailwind">
              <BiLogoTailwindCss />
            </span>
            <span className="programming-tools" id="html">
              <BiLogoHtml5 />
            </span>
            <span className="programming-tools" id="css">
              <BiLogoCss3 />
            </span>
            <span className="programming-tools" id="sass">
              <BiLogoSass />
            </span>
            <span className="programming-tools" id="python">
              <BiLogoPython />
            </span>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="header">
          {letters.map((letter, index) => (
            <h1 className="letter" key={index}>
              {letter}
            </h1>
          ))}
        </div>

        <div className="slides">
          <div
            className="my-story"
            id="slide-1"
            style={{
              width: condition ? "55%" : "50%",
              height: condition ? "270px" : "",
              boxShadow: condition ? "0px 0px 10px 5px black" : "",
              zIndex: condition ? "1" : "0",
              left: condition ? "0%" : "34%",
              filter: condition ? "brightness()" : "brightness(0.7)",
              opacity: condition ? "" : "0.5",
              pointerEvents: condition ? "" : "none",
            }}
          >
            <div>
              <h1>First Year</h1>
            </div>

            <p>
              In <time>25 December 2021</time>, I embarked on{" "}
              <mark style={{ backgroundColor: mark_color }}>
                my programming journey with Python, initially drawn by its
                simplicity for beginners. My primary goal was to monetize my
                programming skills, so I dedicated myself to daily learning
              </mark>
              . However, after 6 months of learning python,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I decided to enter game development field,
              </mark>
              I realized that python might not be the best language for game
              development. This led me to{" "}
              <mark style={{ backgroundColor: mark_color }}>explore Lua</mark>,
              which shares syntax similarities with Python, but it turned out to
              be a challenging decision.
            </p>
            <p>
              After two weeks of learning Lua, I ventured into game development
              using the Love2D game engine.
              <mark style={{ backgroundColor: mark_color }}>
                This transition opened my eyes to know that game development is
                not a good choice to achieve my goal.
              </mark>
              Despite watching numerous tutorials, I struggled to create my
              first simple game.
              <mark style={{ backgroundColor: mark_color }}>
                I found that Lua alone couldn't fulfill my ambitions,
              </mark>
              and game development demanded extensive experience, making it
              nearly impossible for a high school beginner.
            </p>
            <p>
              After four months of frustration,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I decided to return to Python in October.
              </mark>{" "}
              I delved deeper into Python, exploring more important concepts. In{" "}
              <time>December 2022</time>,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I began studying the tkinter module
              </mark>
              , hoping to work on graphical projects. However, when I tried to
              find work on platforms like Upwork, my lack of experience and
              self-doubt hindered my progress.{" "}
              <mark style={{ backgroundColor: mark_color }}>
                Despite the challenges, my motivation and passion for
                programming kept me going. Thus, my first year of learning
                concluded, with the realization that I still had much to achieve
                on my path to success.
              </mark>
            </p>
          </div>
          <div
            className="my-story"
            id="slide-2"
            style={{
              left: condition ? "-20%" : "-49%",
              filter: condition ? "brightness(0.7)" : "brightness()",
              opacity: condition ? "0.5" : "",
              width: condition ? "50%" : "55%",
              height: condition ? "" : "270px",
              boxShadow: condition ? "" : "0px 0px 10px 5px black",
              zIndex: condition ? "0" : "1",
              pointerEvents: condition ? "none" : "",
            }}
          >
            <h1>Second Year</h1>
            <p>
              In <time>February 2023</time>,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I delved into the pandas library
              </mark>
              , influenced by its demand on platforms like Upwork.
              <mark style={{ backgroundColor: mark_color }}>
                It was a mistaken decision
              </mark>
              , as I soon realized that pandas was just one tool in the vast
              landscape of data science. Recognizing my earlier lack of
              direction,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I began by asking myself a fundamental question: Which field did
                I want to pursue? This clarity was pivotal, guiding my learning
                journey and preventing future missteps.
              </mark>
            </p>
            <p>
              Artificial intelligence had always held a special place in my
              programming aspirations, leading me to choose Python, a
              cornerstone language in this domain. However, I soon recognized
              the formidable math and experience requirements of AI, prompting
              me to explore other interests.{" "}
              <mark style={{ backgroundColor: mark_color }}>
                Web development emerged as a captivating and viable path.
              </mark>
              <time>In April 2023</time>,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                I embarked on my journey by mastering HTML and CSS within a
                month, followed by JavaScript—the second programming language in
                my repertoire.
              </mark>
              The exploration of the Document Object Model (DOM) added a
              fascinating dimension, allowing me to create responsive websites.
            </p>
            <p>
              <mark style={{ backgroundColor: mark_color }}>
                As I delved into SCSS, Git, and GitHub
              </mark>
              , I continued my relentless pursuit of knowledge.
              <mark style={{ backgroundColor: mark_color }}>
                {" "}
                React, though challenging, marked a significant milestone in my
                journey
              </mark>
              . Looking ahead,{" "}
              <mark style={{ backgroundColor: mark_color }}>
                my sights are set on backend development
              </mark>
              , with the goal of building complete websites.{" "}
              <mark style={{ backgroundColor: mark_color }}>
                Despite my past missteps, I view them as valuable learning
                experiences that have brought me to this point.
              </mark>
              I am grateful for the journey and excited to progress with
              newfound confidence toward my ultimate objectives.
            </p>
          </div>
        </div>
        <div className="slide-buttons">
          <button id="highlight" onClick={handleMark}>
            Highlight Key
          </button>
          <span className="icons" onClick={handleStory}>
            <GrLinkNext />
          </span>
        </div>
      </div>

      <div id="projects">
        <h1>Projects</h1>
        <div id="projects-list">
          <div className="project" id="project-1">
              <a
                href="https://social-clone0.netlify.app/"
                target="_blank"
              >
                <img
                  className="images"
                  id="drum-image"
                  src={process.env.PUBLIC_URL + "/Facebook_Clone.png"}
                  alt="Facebook Clone"
                ></img>
              </a>
              <a
                className="github-icon"
                href="https://github.com/Kiritsu0/Facebook-Clone"
                target="_blank"
              >
                <span>
                  <FaGithub />
                </span>
              </a>
          </div>
          <div className="project" id="project-2">
            <a
              href="https://kiritsu0.github.io/React-Weather-App/"
              target="_blank"
            >
              <img
                className="images"
                id="weather-image"
                src={process.env.PUBLIC_URL + "/weather_project.png"}
                alt="Weather"
              ></img>
            </a>
            <a
              className="github-icon"
              href="https://github.com/Kiritsu0/React-Weather-App"
              target="_blank"
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          <div className="project" id="project-3">
            <a
              href="https://kiritsu0.github.io/React-Quiz-App/"
              target="_blank"
            >
              <img
                className="images"
                id="test-image"
                src={process.env.PUBLIC_URL + "/test_project.png"}
                alt="Test"
              ></img>
            </a>
            <a
              className="github-icon"
              href="https://github.com/Kiritsu0/React-Quiz-App"
              target="_blank"
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          <div className="project" id="project-4">
            <a
              href="https://kiritsu0.github.io/React-Drum-Machine/"
              target="_blank"
            >
              <img
                className="images"
                id="drum-image"
                src={process.env.PUBLIC_URL + "/drum_project.png"}
                alt="Drum Machine"
              ></img>
            </a>
            <a
              className="github-icon"
              href="https://github.com/Kiritsu0/React-Drum-Machine"
              target="_blank"
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          
        </div>
      </div>

      <div id="contacts">
        <h1>
          Contact <span>Me</span>
        </h1>
        <a href="mailto:husseindeeb162@gmail.com" className="my-contact">
          <span className="contact-icons">
            <HiOutlineMail />
          </span>{" "}
          husseindeeb162@gmail.com
        </a>
        <a href="tel:+16477995004" className="my-contact">
          <span className="contact-icons">
            <FaPhoneAlt />
          </span>{" "}
          +1 (647) 799-5004
        </a>
        <div className="icons">
          <a
            href="https://github.com/Kiritsu0"
            className="media"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hussein-deeb0/"
            className="media"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/KIRITSU295053"
            className="media"
            target="_blank"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
