import './App.css';
import React, { useState } from 'react';

import {ItemCard, Popup} from "./Components.jsx";

function App() {
  return (
    <div id="app">
      { window.screen.width <= 1024 &&
        <div className="heading1" id="mobile">Mobile Version Coming Soon!</div>
      }
      { window.screen.width > 1024 &&
      <>
        <Home/>
        <Projects/>
        <About/>
        <Contacts/>
      </>
      }
      <style>
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
    </div>
  );
}

class Home extends React.Component{
  render(){
    return(
      <>
        <div id="home">
          <div id="nav">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="https://www.linkedin.com/in/ivo-sasaoka-231147185/" target="_blank" rel="noreferrer">Contact</a>
          </div>
          <div id="landingContent">
            <div className="heading1">🐟</div>
          </div>
        </div>
         <div className="custom-shape-divider-top-1629554407">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
         </div>
      </>
    );
  };
}

function About(){
  return(
    <div id="about">
      <div id="aboutFlex">
          <div className="heading1">ABOUT</div>
          <div className="heading3">
            I am a MSc Teaching English to Speakers of Other Languages (TESOL) graduate of the University of Edingburgh.
            I joind the program becuase I wanted to be able to create useful online materials for language teaching. 
            This website is a collection of what I have made so far.
            Feel free to use what you find on this website.
            I hope you find it useful.
          </div>
        </div>
    </div>
  );
}

function Projects(){
  const [activeProject, setActiveProject] = useState("default");
  const projectInfo = {
    default:{
      nameDisplay: " ",
      nameSort: "default",
      msg: " ",
      url: " "
    },
    interviewPractice:{
      nameDisplay: "Interview Practice",
      nameSort:"interviewPractice",
      msg: "This Web App was buit as the first part of a two-part job interview preparation ESP course. This App serves pre-recorded videos of an interviewer asking common questions. Students will be able to record their answers and download the session to their computer to rate their own preformance. The questions are randomized and will be reset on reload. To ensure proper functionality, enable voice and video premissions.",
      url: "https://eloquent-bartik-db428d.netlify.app/"
    },
    rtcPractice:{
      nameDisplay: "RTC Practice",
      nameSort:"rtcPractice",
      msg:"This Web App was buit as the second part of a two-part job interview preparation ESP course. This App connects learners over Web RTC and provides the opportunity to roleplay as both the interviewer and the interviewee. It may be necessary to reload the page after accepting permissions.",
      url: "https://reverent-darwin-89160c.netlify.app/"
    }
  }
  return(
    <>
      <div id="projects">
        <div className="heading1">PROJECTS</div>
        <div id="projectFlex">
          <ItemCard shape="rct" projectInfo={projectInfo.interviewPractice} setActiveProject={(x)=>setActiveProject(x)}/>
          <ItemCard shape="rct" projectInfo={projectInfo.rtcPractice} setActiveProject={(x)=>setActiveProject(x)}/>
        </div>
        <Popup projectInfo={projectInfo[activeProject]}/>
      </div>
      <div className="custom-shape-divider-top-1629554714">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>
  </>
  );
}

function Contacts(){
  return(
    <>
      <div className="custom-shape-divider-bottom-1629564797" id="contacts">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </>
  );
}

export default App;