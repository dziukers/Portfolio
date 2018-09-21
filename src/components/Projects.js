import React, {Component} from 'react';
import ProjectsCard from './ProjectsCard';
import styled from 'styled-components';
import CardData from './CardData';

const ProjectsContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
`;

class Projects extends Component {

render() {
    return (
        
        <ProjectsContainer>
        {CardData.map(card =>

         <ProjectsCard
            key={card.id} 
            id={card.id} 
            primaryColor={card.primaryColor}
            neonColor= {card.neonColor} 
            projectImg={card.projectImg} 
            technologies={card.technologies}
            linkPreview= {card.linkPreview}
            linkCode = {card.linkCode}
            title = {card.title}>
            </ProjectsCard>
)}
            </ProjectsContainer>
    )
    }}


export default Projects;