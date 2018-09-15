import React from 'react';
import Projects_Card from './Projects_Card';
import styled from 'styled-components';
import starwars from '../Images/starwars-min.jpg';
import portfolio from '../Images/portfolio-min.jpg';
import krainaindyka from '../Images/krainaindyka-min.jpg';
import solarsystem from '../Images/solarsystem-min.jpg';
import dragonball from '../Images/dragonball-min.jpg';
import bggenerator from '../Images/bggenerator-min.jpg';

const Projects_Container = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
`;
const Projects = () => {
    return (
        <Projects_Container>
                <Projects_Card 
                id={1} 
                primaryColor='211, 20, 20'
                neonColor= '211, 80, 80' 
                projectImg={starwars} 
                technologies={['html','css','js', 'react']}
                linkPreview='https://dziukers.github.io/Star-Wars-App/'
                linkCode ='https://github.com/dziukers/Star-Wars-App'
                >Star Wars InstaSearch
                </Projects_Card>
                <Projects_Card 
                id={2} 
                primaryColor='21, 160, 210' 
                neonColor= '21,220,255' 
                projectImg={portfolio}
                technologies={['html','css','js', 'react']}
                linkPreview='/'
                linkCode ='/'
                >Portfolio
                </Projects_Card>
                <Projects_Card 
                id={3} 
                primaryColor='20, 209, 99' 
                neonColor= '21,255,160' 
                projectImg={dragonball}
                technologies={['html','css','js']}
                linkPreview='https://dziukers.github.io/Dragon-Ball-Radar/'
                linkCode ='https://github.com/dziukers/Dragon-Ball-Radar'
                >Dragon Ball Radar Game
                </Projects_Card>
                <Projects_Card 
                id={4} 
                primaryColor='242, 238, 29' 
                neonColor= '242, 255, 90' 
                projectImg={krainaindyka}
                technologies={['html','css']}
                linkPreview='http://krainaindyka.pl'
                linkCode ='disabled'
                >Kraina indyka
                </Projects_Card>
                <Projects_Card 
                id={5} 
                primaryColor='232, 100, 10' 
                neonColor= '232, 155, 39' 
                projectImg={solarsystem}
                technologies={['html','css','js']}
                linkPreview='https://dziukers.github.io/Solar-system/'
                linkCode ='https://github.com/dziukers/Solar-system'
                >Animated solar system
                </Projects_Card>
                <Projects_Card 
                id={7} 
                primaryColor='164, 66, 244' 
                neonColor= '164, 150, 255' 
                projectImg={bggenerator}
                technologies={['html','css','js']}
                linkPreview='https://dziukers.github.io/Gradient-Background-Generator/'
                linkCode ='https://github.com/dziukers/Gradient-Background-Generator'
                >Gradient Background Generator
                </Projects_Card>
            </Projects_Container>
    )
}

export default Projects;