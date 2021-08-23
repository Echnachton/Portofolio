import React from "react";

class Parallax extends React.Component{
    render(){
        return(
            <div id="landingContainer">
            <div className="parallax" id="nav" data-delta="1">
                <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contacts">Contact</a>
            </div>
            <div className="parallax" id="homeTitle">ポートフォリオ</div>
            <div id="home">
                <div className="parallax" id="backdrop"/>
                <img className="parallax" id="top" src={paraTop} alt="" width="1" height="1" data-delta = "1"/>
                <img className="parallax" id="mid" src={paraMid} alt="" width="1" height="1" data-delta = "0.5"/>
                <img className="parallax" id="bottom" src={paraBottom} alt="" width="1" height="1" data-delta = "0.2"/>
            </div>
            </div>
        );
    }
    componentDidMount(){
        const parallax = document.querySelectorAll(".parallax");
        const threshold = 300;
        window.addEventListener("scroll", ()=>{
          for(let el of parallax){
            if(window.pageYOffset<threshold){
              el.style.transform = `translateY(${window.pageYOffset * el.dataset.delta}px)`
            }
          }
        });
      }
}