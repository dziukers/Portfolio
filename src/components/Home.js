import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';


const Home = () => {
        return (
            <LogoWrapper>
                <Logo>
                    <LogoKrystianDziuk>Krystian Dziuk</LogoKrystianDziuk>
                    <LogoTextWrapper>
                        <LogoChangeTechnologyText />
                        <LogoDeveloper>Developer</LogoDeveloper>
                    </LogoTextWrapper> 
                </Logo>
            </LogoWrapper>
        )
    }


const changetext = keyframes` 
    0%{content: 'Front-End'}
    33%{content: 'React';}
    66%{content: 'Web'}
`;

const buzz = keyframes` 
    70% { opacity: 0.80; }
  `;
const blink = keyframes`
    40% { opacity: 1; }
    42% { opacity: 0.8; }
    43% { opacity: 1; }
    45% { opacity: 0.2; }
    46% { opacity: 1; }
`;
const LogoWrapper = styled.div`
    height:60vh;
    display: flex;
    justify-content: center;
      
    @media screen and (max-width: 700px) {
        height:70vh;
    }
      `;
    
const Logo = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-family: "neontubes";
    text-align: center;
    white-space: nowrap;

    @media screen and (max-width: 700px) {
    font-size: 0.7em;
    }

    `;

const LogoKrystianDziuk = styled.span`
        font-size: 5em;
        display: block;
        transform: rotate(-1deg);
        color: white;
        text-shadow:
          0 0 0 transparent,
          0 0 10px rgb(255,0,60),
          0 0 20px rgba(255,0,60,.5),
          0 0 40px rgba(255,0,60,1),
          0 0 100px rgba(255,0,60,1),
          0 0 200px rgba(255,0,60,1),
          0 0 300px rgba(255,0,60,1),
          0 0 500px rgba(255,0,60,1);
        animation: ${blink} 4s infinite alternate;

        @media screen and (max-width: 700px) {
            text-shadow:
            0 0 0 transparent,
            0 0 10px rgb(255,0,60),
            0 0 20px rgba(255,0,60,.5),
            0 0 100px rgba(255,0,60,1),
            0 0 200px rgba(255,0,60,1)
        }
`;
const LogoTextWrapper = styled.span`
        display: flex;
        justify-content: flex-end;
        transform: rotate(1deg);
        font-size: 2.5em;
        color: white;
        text-shadow:
          0 0 0 transparent,
          0 0 10px rgb(38,149,255),
          0 0 20px rgba(38,149,255,.5),
          0 0 40px rgba(38,149,255,1),
          0 0 100px rgba(38,149,255,1),
          0 0 200px rgba(38,149,255,1),
          0 0 300px rgba(38,149,255,1);
        animation: ${buzz} 0.01s infinite alternate;
        white-space: normal;

        @media screen and (max-width: 700px) {
            text-shadow:
            0 0 0 transparent,
            0 0 10px rgb(38,149,255),
            0 0 20px rgba(38,149,255,.5),
            0 0 100px rgba(38,149,255,1),
            0 0 200px rgba(38,149,255,1)
        }
`;
const LogoChangeTechnologyText = styled.span`
        &::before {
        margin: 0 0.8em 0 0;
        display:block;
        content:'Front-End';
        animation: ${changetext} 10s linear infinite;
        }
`;
const LogoDeveloper = styled.span`
        margin: 0 2em 0 0;

         @media screen and (max-width: 700px) {
            text-shadow:
            0 0 0 transparent,
            0 0 10px rgb(38,149,255),
            0 0 20px rgba(38,149,255,.5),
            0 0 100px rgba(38,149,255,1),
            0 0 200px rgba(38,149,255,1)
        }
    `;
export default Home;