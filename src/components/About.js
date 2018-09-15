import React from 'react';
import '../css/fontello.css';
import '../App.css';
import ImgFace from '../Images/face-min.png';

const About = () => {
    return (

        <div className='aboutMe'>
            <div className='aboutMe__info-container'>
                <img src={ImgFace} className='aboutMe__img' />
                <span>{`My name is Krystian and I am looking for a job as a Front-End Developer. Actually, I am still a junior but I learn a lot and gain experience every single day.\nI value creative solutions keeping in mind best UI patterns using new technologies. That's why I find passion in creating staff in React (like this SPA or`} 
                    <a target='_blank' href='https://dziukers.github.io/Star-Wars-App/'> {`Star Wars App`}</a> {`).`}<p>In the near future I would like to learn about back-end technologies, like express.js and PostgreSQL and also Redux in order to build PWA's (Progressive Web Apps).</p>
                </span>
            </div>
            <div className='aboutMe__fontello-icons'>
                <i className='icon-html5-1'></i>
                <i className='icon-css3-1'></i>
                <i className='icon-javascript'></i>
                <i className='icon-react'></i>
                <i className='icon-npm'></i>
                <i className='icon-node'></i>
            </div>
        </div>
    )
}

export default About;