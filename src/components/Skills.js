import React from 'react';
import styled, { keyframes } from 'styled-components';
import bg from '../Images/bg-dots.png';

const Skills = () =>  {
        return (
            <StackWrapper>
                <StackContainer className='fog-to-bottom' color='rgb(255,30,30)' bg={bg}>
            <div className='tech'>
              <h1>Stack</h1>
            <hr className="neon"></hr>
              <ul>
                <li><i className='icon-html5-1'></i>HTML5</li>
                <li><i className='icon-css3-1'></i>CSS3</li>
                <li><i className='icon-sass-original'></i>Sass</li>
                <li><i className='icon-javascript'></i>JavaScript (ES6+)</li>
                <li><i className='icon-typescript'></i>TypeScript</li>
                <li><i className='icon-react'></i>React</li>
                <li><i className='icon-angular'></i>Angular</li>
              </ul>
            </div>
            <div className='tools'>
              <h1 >Additional experience</h1>
            <hr className="neon"></hr>
              <ul>
                <li><i className='icon-bootstrap-plain'></i>Bootstrap</li>
                <li><i className='icon-node'></i>NodeJS</li>
                <li><i className='icon-express-original'></i>ExpressJS</li>
                <li><i className='icon-postgresql-plain'></i>PostgreSQL</li>
                <li><i className='icon-mapbox'></i>MapBox</li>
                <li><i className='icon-rxjs'></i>RxJS</li>
              </ul>
            </div>
            <div className='other'>
              <h1>Tools</h1>
              <hr className="neon"></hr>
              <ul>
              <li><i className='icon-git-plain'></i>Git/GitHub</li>
              <li><i className='icon-npm'></i>npm</li>
              <li><i className='icon-visualstudio-plain'></i>Visual Studio Code</li>
              <li><i className='icon-jira'></i>Jira</li>
              </ul>
            </div>
                </StackContainer>
            </StackWrapper>
        )
    };
    
    //keyframes
const makegray = keyframes`
41% {filter:grayscale(0%)}
42% {filter:grayscale(100%)}
43% {filter:grayscale(0%)}
49% {filter:grayscale(0%)}
50% {filter:grayscale(100%)}
65% {filter:grayscale(100%)}
66% {filter:grayscale(0%)}
`;

function blink (props) {
return keyframes`    
41% { border:0.5px solid white;box-shadow: 0 0 20px 3px ${props.color};  }
42% { border:0.5px solid gray;box-shadow:none }
43% { border:0.5px solid white;box-shadow: 0 0 20px 3px ${props.color} }
49% { border:0.5px solid white;box-shadow: 0 0 20px 3px ${props.color}; }
50% { border:0.5px solid gray;box-shadow:none }
65% { border:0.5px solid gray;box-shadow:none}
66% { border:0.5px solid white;box-shadow: 0 0 20px 3px ${props.color}; }
`};
    const turnon = keyframes `
    100%{text-shadow: 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;color:#fee}
    `;
    const show = keyframes `
    100%{opacity:1}
    `;
        const StackWrapper = styled.div `
        max-width:90vw;
        margin:3em auto;
        ul{
          padding:0;
          list-style:none;
          font-size: 1.1em;
          li{
            text-align:left;
          padding:0.4em;
            i:before{
              width:30px;
             padding-right:0.5em;
            }
          }
        }
        div.tech{
            /* hr{animation:${turnon} 0.2s 1 0.4s forwards}; */
            
        ul{opacity:0;animation:${show} 0.2s 1 0.4s forwards}}
        div.tools{
          /* hr{animation:${turnon} 0.2s 1 0.7s forwards}; */
        ul{opacity:0;animation:${show} 0.2s 1 0.7s forwards}}
        div.other{
        /* hr{animation:${turnon} 0.2s 1 1s forwards}; */
        ul{opacity:0;animation:${show} 0.2s 1 1s forwards}}
        
     `;
        const StackContainer = styled.div `
            max-width:1100px;
            /* width:100%; */
            margin:0 auto;
            display:flex;
            justify-content:space-between;
            box-shadow: -3px 3px 6px 5px black;
            border: double 6px rgba(150,150,150,0.8);
            border-radius:10px;
            padding:1em;
            background-image:linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url(${props => props.bg});
            h1 {
            /* font-family: "neontubes"; */
            font-weight:300;
            margin:14px 0;
            font-size:1.3em;
            text-shadow: none;
            color:transparent;
            background: -webkit-linear-gradient(
            270deg,
            rgb(201, 201, 201) , rgb(95, 95, 95), ${props => props.color});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${makegray} 5s infinite alternate;  
        }
        hr {
            /* height:0px; */
            border:0.5px solid white;
            border-radius:50px;
            background-color: white;
            width:200px;
            height:1px;
            box-shadow: 0 0 20px 3px ${props => props.color};
            animation: ${props => blink(props)} 5s infinite alternate;
        }

.tech, .tools, .other {
  margin:0 auto;
display: flex;
flex-direction: column;
text-align:center;
line-height:1.5em;
color:rgb(160, 160, 160);
font-family: 'Nunito', sans-serif;
/* height:400px; */
}
          @media (max-width:700px) {
            /* margin:0 auto; */
            flex-direction:column;
          }
        `;

export default Skills;