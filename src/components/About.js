import React, {Component} from 'react';
import '../css/fontello.css';
import styled from 'styled-components';
import ImgFace from '../Images/face-min.png';
import bg from '../Images/bg-dots.png';

const About = () => {
    return (
        <AboutMeWrapper>
            <AboutMeInfoContainer>
                <AboutMeImg src={ImgFace} alt='portrait on the wall' />
                <span>{`My name is Krystian and I am looking for a job as a Front-End Developer. Actually, I learn a lot and gain experience every single day by making my own projects and trying out new solutions.\nI value creative approach keeping in mind best UI patterns using new technologies. That's why I find passion in creating stuff in React (like this SPA or`} 
                    <a target='_blank' rel="noopener noreferrer" href='https://dziukers.github.io/Star-Wars-App/'> {`Star Wars App`}</a> {`).`}<p>In the near future I would like to learn about back-end technologies, like express.js and PostgreSQL and also Redux in order to build PWA's (Progressive Web Apps).</p>
                </span>
            </AboutMeInfoContainer>
            <AboutMeFontelloIcons>
                <i className='icon-html5-1'></i>
                <i className='icon-css3-1'></i>
                <i className='icon-javascript'></i>
                <i className='icon-react'></i>
                <i className='icon-npm'></i>
                <i className='icon-node'></i>
            </AboutMeFontelloIcons>
        </AboutMeWrapper>
    )
}

const AboutMeWrapper = styled.div`
    max-width: 1000px;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    margin:0 auto;
    color:rgb(160, 160, 160);
    font-family: 'Nunito', sans-serif;
    min-height: 60vh;
    max-height: 70vh;
    white-space: pre-wrap;
    

    @media screen and (max-width: 1000px) {
    max-width: 90%;
    }
    @media screen and (max-width: 700px) {
      max-width: 90%;
      line-height: 1.25em;
    }
`;
const AboutMeInfoContainer = styled.div`

    span {
    display:block;
    text-shadow: 5px 15px 5px rgba(0,0,0,0.90);
    line-height: 1.375em;
    }
    span a {
    color: rgb(100, 45, 45)
    }
    `;

 const AboutMeImg = styled.img` 
 float:left;
 opacity:0.5;
 max-width:30%;
 z-index:-3;
 @media screen and (max-width: 700px) {
  float: none;
  max-width:60%;
  margin:1em auto;
  display: block;
    }
 `;

const AboutMeFontelloIcons = styled.div`
    clear: both;
    display:flex;
    padding:2em;
    text-align: center;
    justify-content: space-between;

[class^="icon-"]:before{
  font-size: 3.5em;
  color: rgba(120,120,120,0.9);
  text-shadow: 10px 19px 5px rgba(0,0,0,1), 10px 15px 5px rgba(0,0,0,1);
}

    i.icon-npm:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(203, 56, 55),
  0 0 20px rgba(203, 56, 55,.5),
  0 0 40px rgba(203, 56, 55,1),
  0 0 100px rgba(203, 56, 55,1),
  0 0 200px rgba(203, 56, 55,1),
  0 0 300px rgba(203, 56, 55,1),
  0 0 500px rgba(203, 56, 55,1),
  0 0 1000px rgba(203, 56, 55,1);
} /* '' */
i.icon-css3-1:hover:before,i.icon-css3:hover:before,i.icon-css3-2:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(21, 114, 182),
  0 0 20px rgba(21, 114, 182,.5),
  0 0 40px rgba(21, 114, 182,1),
  0 0 100px rgba(21, 114, 182,1),
  0 0 200px rgba(21, 114, 182,1),
  0 0 300px rgba(21, 114, 182,1),
  0 0 500px rgba(21, 114, 182,1),
  0 0 1000px rgba(21, 114, 182,1);
} /* '' */
i.icon-javascript:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(247, 223, 30),
  0 0 20px rgba(247, 223, 30,.5),
  0 0 40px rgba(247, 223, 30,1),
  0 0 100px rgba(247, 223, 30,1),
  0 0 200px rgba(247, 223, 30,1),
  0 0 300px rgba(247, 223, 30,1),
  0 0 500px rgba(247, 223, 30,1),
  0 0 1000px rgba(247, 223, 30,1);
} /* '' */
i.icon-react:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(97, 218, 251),
  0 0 20px rgba(97, 218, 251,.5),
  0 0 40px rgba(97, 218, 251,1),
  0 0 100px rgb(97, 218, 251),
  0 0 200px rgba(97, 218, 251,1),
  0 0 300px rgba(97, 218, 251,1),
  0 0 500px rgba(97, 218, 251,1),
  0 0 1000px rgba(97, 218, 251,1);
} /* '' */
i.icon-node-dot-js:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(51, 153, 51),
  0 0 20px rgba(51, 153, 51,.5),
  0 0 40px rgba(51, 153, 51,1),
  0 0 100px rgba(51, 153, 51,1),
  0 0 200px rgba(51, 153, 51,1),
  0 0 300px rgba(51, 153, 51,1),
  0 0 500px rgba(51, 153, 51,1),
  0 0 1000px rgba(51, 153, 51,1);
} /* '' */
i.icon-node:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(51, 153, 51),
  0 0 20px rgba(51, 153, 51,.5),
  0 0 40px rgba(51, 153, 51,1),
  0 0 100px rgba(51, 153, 51,1),
  0 0 200px rgba(51, 153, 51,1),
  0 0 300px rgba(51, 153, 51,1),
  0 0 500px rgba(51, 153, 51,1),
  0 0 1000px rgba(51, 153, 51,1);
} /* '' */
i.icon-html5:hover:before,i.icon-html5-1:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(227, 79, 38),
  0 0 20px rgba(227, 79, 38,.5),
  0 0 40px rgba(227, 79, 38,1),
  0 0 100px rgba(227, 79, 38,1),
  0 0 200px rgba(227, 79, 38,1),
  0 0 300px rgba(227, 79, 38,1),
  0 0 500px rgba(227, 79, 38,1),
  0 0 1000px rgba(227, 79, 38,1);
} /* '' */
i.icon-wordpress:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(21, 114, 182),
  0 0 20px rgba(21, 114, 182,.5),
  0 0 40px rgba(21, 114, 182,1),
  0 0 100px rgba(21, 114, 182,1),
  0 0 200px rgba(21, 114, 182,1),
  0 0 300px rgba(21, 114, 182,1),
  0 0 500px rgba(21, 114, 182,1),
  0 0 1000px rgba(21, 114, 182,1);
} /* '' */

    @media screen and (max-width: 700px) {
      font-size:0.7em;
      padding:1em 0 1em 0 ;
      [class^="icon-"]:before{
        text-shadow: initial;
      }
    }
    `; 
   

  

export default About;