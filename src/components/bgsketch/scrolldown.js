
import React, {
    Component
} from "react"
// import {ReactDOM}from "react-dom";
// import * as Scroll from 'react-scroll';
import {

    animateScroll as scroll,
    
} from 'react-scroll'
// var React = require('react');
// var Scroll = require('react-scroll');

// import ScrollDown from "../bgsketch/scrolldown"
import "./scrolldown.css"



// let Link = Scroll.Link;
// let Element = Scroll.Element;
// let Events = Scroll.Events;
// let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;
const ScrolldownBody = props => {

 
     
        //   let thisUrl = sel.src;
  return (
    <div className="scroll-down">
    <svg className="flip" width="300" height="108" viewBox="0 0 300 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="white">
        < animate repeatCount = "indefinite"
        fill = "freeze"
        attributeName = "d"
        dur = "6s"
        values = "M0 110.198C46.9062 110.198 45.7188 91.0237 107 81.9058C168.281 72.7879 167.229 29.2526 213.5 18.1552C269.5 4.72442 324 31.7352 380 0.197754V110.198L0 110.198Z;
        
        M0 110C23.4531 78.3789 70 78.5497 105 73.3697C140 68.1897 149.2 45.9891 193.5 45.9891C235.953 45.9891 238.5 -10.6221 380 1.77473V110L0 110Z;
        
       M0 110C64 110 71.3984 95.5779 114 65.5712C145.887 43.1114 194.906 26.8545 230.5 32.4385C290.5 41.8513 327.75 28.3224 380 0V110L0 110Z;

        M0 110.198C46.9062 110.198 45.7188 91.0237 107 81.9058C168.281 72.7879 167.229 29.2526 213.5 18.1552C269.5 4.72442 324 31.7352 380 0.197754V110.198L0 110.198Z
        " />
        </path>
    </svg>

    
      <div id="home-down-btn"  onClick={props.scrollTop} >
        <svg version="1.1" className="viewmore"  viewBox="0 0 58.999 58.999" >
            <g>
                <g>
                    <path
                        d="M29.167,0c-1.104,0-2,0.896-2,2v50.289L11.86,36.728c-0.781-0.781-1.922-0.781-2.703,0
    			c-0.781,0.78-0.719,2.047,0.062,2.828l18.883,18.857c0.375,0.375,0.899,0.586,1.43,0.586s1.047-0.211,1.422-0.586l18.857-18.857
    			c0.781-0.781,0.783-2.048,0.002-2.828c-0.781-0.781-2.296-0.781-3.077,0L31.167,52.052V2C31.167,0.895,30.271,0,29.167,0z" />
                </g>
            </g>
        </svg>

    </div>
    </div>
    
    );
}
    class ScrollDown extends Component {
        scrollTop = () =>{

            if (typeof window !== "undefined") {
            scroll.scrollTo(window.innerHeight);
        }
    //  console.log(window.innerHeight);
        }

        easeout = function (position, destination, rate, callback) {
            if (position === destination || typeof destination !== 'number') {
                return false;
            }
            destination = destination || 0;
            rate = rate || 4;
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function (fn) {
                    return setTimeout(fn, 17);
                }
            }

            var step = function () {
                position = position + (destination - position) / rate;
                if (Math.abs(destination - position) < 1) {
                    callback(destination, true);
                    return;
                }
                callback(position, false);
                requestAnimationFrame(step);
            };
            step();
        }
        render() {

            return (

                <ScrolldownBody scrollTop = {
                    this.scrollTop
                }
                />

            )
        }

    }

    export default ScrollDown

