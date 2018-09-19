import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import bg from '../Images/bg-dots.png';
import cv from '../Images/CV-Krystian Dziuk.pdf';

const Contact = ({style}) => {
    return (
        <ContactMeWrapper style={{...style}} color='rgb(255,50,50)' bg={bg}>
            <Text>{`I am currently open to new opportunities and actively seeking for a position as a Front-end Developer.\nFeel free to reach me out at`} 
                <a href='mailto:krystian.dziuk10@gmail.com'> krystian.dziuk.10@gmail.com</a>.
                <hr></hr>
            </Text>
            <IconsBar>
                <Icon iconcolor='rgb(255,255,0)' href='https://www.linkedin.com/in/krystian-dziuk-749b8615b/' target='_blank'>
                    <i className='icon-linkedin-1'></i>
                </Icon>
                <Icon href='https://github.com/dziukers' target='_blank'>
                    <i className='icon-github-circled'></i>
                </Icon>
                <Icon href='mailto:krystian.dziuk10@gmail.com' target='_blank'>
                    <i className='icon-email'></i>
                </Icon>
                <Icon href={cv} target='_blank'>
                    <i className='icon-id-card'></i>
                </Icon>
            </IconsBar>
        </ContactMeWrapper>
    )
}

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
41% {border:1px solid white;box-shadow: 0 0 15px 2px ${props.color};  }
42% { border:1px solid gray;box-shadow:none }
43% { border:1px solid white;box-shadow: 0 0 15px 2px ${props.color} }
49% { border:1px solid white;box-shadow: 0 0 15px 2px ${props.color}; }
50% { border:1px solid gray;box-shadow:none }
65% { border:1px solid gray;box-shadow:none}
66% { border:1px solid white;box-shadow: 0 0 15px 2px ${props.color}; }
`};

 // key styles for elements
const Text = styled.span``;
const IconsBar = styled.div``;
const Icon = styled.a`
     
`;
    // Styled Contact Wrapper with styled nested elements
const ContactMeWrapper = styled.div`
margin:1em auto;
max-width: 1000px;
font-size: 1.4em;
display: flex;
flex-direction: column;
text-align:center;
line-height:1.5em;
color:rgb(160, 160, 160);
font-family: 'Nunito', sans-serif;
box-shadow: -3px 3px 6px 5px black;
border: double 6px rgba(150,150,150,0.8);
border-radius:10px;
padding:1.5em;
background-image:linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url(${props => props.bg});

@media (max-width: 700px) {
    margin:3em 1em;
    justify-content:space-between;

  }
    ${Text} {
    text-shadow: 0 1px 0 black;
    white-space:pre-wrap;

        a {
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
            border:1px solid white;
            width:80%;
            height:0;
            box-shadow: 0 0 15px 2px ${props => props.color};
            animation: ${props => blink(props)} 5s infinite alternate;
        }
    }
    ${IconsBar} {
        [class^="icon-"]:before {
            font-size: 1.8em;
            padding:0.5em;
            text-shadow: none;
            color:transparent;
            background: -webkit-linear-gradient(
            90deg,
            rgb(201, 201, 201) , rgb(95, 95, 95), ${props => props.color});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${makegray} 5s infinite alternate;
        }
    }
    ${Icon} {
        &:hover{
            [class^="icon-"]:before {
            transform:scale(1.1);
            }
        }
    }
`;

export default Contact;