import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';


class Home extends Component {

    constructor() {
        super();
        this.state={
            broke:false
        };
    };
    

handleBroke = () => {
    this.setState({
      broke:true
    });
  }
    render() {

        return (
            <LogoWrapper onClick={this.handleBroke}>
                <Logo >
                    <LogoKrystianDziuk >Krystian Dziu<span className={this.state.broke? 'broke-animation' : null}>k</span></LogoKrystianDziuk>
                    <LogoTextWrapper>
                        <LogoChangeTechnologyText />
                        <LogoDeveloper>Developer</LogoDeveloper>
                    </LogoTextWrapper> 
                </Logo>
            </LogoWrapper>
        )
    }
    }


const changetext = keyframes` 
    0%{content: 'Front-End'}
    25%{content: 'Angular';}
    50%{content: 'React';}
    75%{content: 'Web'}
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
const broken = keyframes`
    40% { opacity: 1; }
    42% { opacity: 0.8}
    43% { opacity: 1; }
    45% { opacity: 0.2 }
    46% { opacity: 1;}
    75% { opacity: 1; color: white;
        text-shadow:inherit}
    76% { opacity: 1; text-shadow:none;color:gray}
`;
const detach = keyframes`
0%{transform: rotate(5deg)}
20%{transform: rotate(10deg)}
30%{transform: rotate(20deg)}
40%{transform: rotate(220deg)}
50%{transform: rotate(140deg)}
60%{transform: rotate(200deg)}
70%{transform: rotate(160deg)}
80%{transform: rotate(190deg)}
90%{transform: rotate(170deg);}
100%{transform: rotate(180deg);}
`;
const LogoWrapper = styled.div`
    height:60vh;
    display: flex;
    justify-content: center;
    user-select: none;  
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
        cursor:pointer;
        text-shadow:
        
          0 0 10px rgb(255,0,60),
          0 0 20px rgba(255,0,60,.5),
          0 0 40px rgba(255,0,60,1),
          0 0 100px rgba(255,0,60,1),
          0 0 200px rgba(255,0,60,1),
          0 0 300px rgba(255,0,60,1),
          0 0 500px rgba(255,0,60,1),0 10px 3px #000; 
          /* text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em rgb(255,0,60), 0 0 0.5em rgb(255,0,60), 0 0 0.1em rgb(255,0,60), 0 10px 3px #000; */
        animation: ${blink} 4s infinite alternate;
        span {
            display:inline-block;
            /* animation: ${broken} 3s infinite; ADDITIONAL EFFECT */ 
            transform-origin:15% 74%;
            transform:rotate(5deg);
        }
        .broke-animation {
            animation:${detach} 5s 1 ease-out forwards;
        }
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
          0 0 300px rgba(38,149,255,1),
          0 10px 3px #000;
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