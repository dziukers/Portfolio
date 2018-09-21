import React, {Component} from 'react';
import styled from 'styled-components';
import bg from '../Images/bg-dots.png';
import AnimateLoad from './AnimateLoad';

class ProjectsCard extends Component{
    state = {didMount: false}
        componentDidMount(){
           setTimeout(() => {
                this.setState({didMount: true})
            }, 0)
        }
render () {
    const {didMount} = this.state;
    const {title, primaryColor,neonColor, projectImg, technologies, linkPreview, linkCode} = this.props;
    const showIcon = technologies.map((technology, i) => {
        switch (technology) {
            case 'html' : return <i key={i} className='icon-html5' />;
            case 'css' : return <i key={i} className='icon-css3-1' />;
            case 'js' : return <i key={i} className='icon-javascript'/>;
            case 'react' : return <i key={i} className='icon-react' />;
            default: return null;
        }});

    return (
        <Card className={`fade-in ${didMount && 'visible'}`} color={primaryColor} neonColor={neonColor} isDisabled={linkCode} bg={bg} >
            <CardTitle> {title} </CardTitle>
            <LinkButton href={linkPreview} target='_blank'>
                <CardImage src={projectImg} alt='project image' />
            </LinkButton>
            <div>
                <IconsBar>
                    {showIcon}
                </IconsBar>
                <CardButtons>
                    <LinkButton href={linkCode ==='disabled' ? null : linkCode} target='_blank'>
                        <ButtonCode><i className='icon-github-circled'></i>CODE</ButtonCode>
                    </LinkButton> 
                    <LinkButton href={linkPreview} target='_blank'>
                        <ButtonDemo><i className='icon-link-ext'></i>PREVIEW</ButtonDemo>
                    </LinkButton> 
                </CardButtons>
            </div>
        </Card>
    )
}
}

    //key styles for card elements
    const CardTitle = styled.h1`
    `;
    const CardImage = styled.img`
    padding:3em 0;
    width:90%;
    height: auto;
    max-height:125px;
    align-self:center;
    opacity:0.5;
    transition: 0.5s ease;
    
    @media (max-width: 700px) {
        opacity:0.8;
      }
    
    `;
    const IconsBar = styled.div`
    [class^="icon-"]:before {
        transition: 2s ease;}
    `;
    const CardButtons = styled.div`
        display: flex; 
        `;
    const Button = styled.button``;
    const ButtonCode = styled(Button)`
       border-bottom-left-radius: 24px;
    `;
    const LinkButton = styled.a`
        width:100%;
    `;
    const ButtonDemo = styled(Button)`
    border-bottom-right-radius: 24px;
    `;
        // Styled Card with nested elements
        const Card = styled.div`
        text-align:center;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        margin:2em;
        padding:1em 0 0 0;
        box-sizing: border-box;
        cursor: pointer;
        max-height: 80vh;
        background-color: #333;
        background-image: radial-gradient(circle at 50% -50%,  rgba(${props => props.color}, .7), transparent),linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${props => props.bg});
        box-shadow: 10px 35px 30px 0px rgba(0,0,0,.8);
        border:5px solid rgba(255,50,50,.1);
        border-radius: 28px;
      min-width:250px;
      max-width: 300px;
      transition: 0.3s ease;
      background-clip: padding-box;
      z-index:6;

        &:hover ${CardImage}  {
            opacity:0.9;
        }
        &:hover ${IconsBar}  {
            [class^="icon-"]:before {
            background: -webkit-linear-gradient(
            250deg,
            rgb(201, 201, 201), rgb(95, 95, 95), rgb(${props => props.color}));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }}
        &:hover ${Button}  {
            border: double 6px rgba(${props => props.neonColor},.4);
        }
            
        ${CardTitle} {
    
            font-size: 15px;
            text-transform: uppercase;
            font-family: 'Nunito', sans-serif;
            color:transparent;
            
            border-bottom:double 6px rgba(${props => props.neonColor},.7);
            background: -webkit-linear-gradient(
            270deg,
            rgb(210,210,210), rgb(150,150,150),rgb(${props => props.color})
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
    
            @media (max-width: 700px) {
                text-shadow:none;
      }
        }
    
        ${IconsBar} {
            
            [class^="icon-"]:before {
            font-size: 24px;
            padding:0.5em;
            text-shadow: none;
            color:rgb(128, 127, 127);
            background: -webkit-linear-gradient(
            250deg,
            rgb(201, 201, 201) , rgb(95, 95, 95), rgb(${props => props.color}));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
            }
        }
    
        ${Button} {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 11px;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: double 6px rgba(${props => props.neonColor},.4);
        background-color: #343333;
        
        color: #bbb;
        cursor: pointer;
        transition: 0.3s ease;
    
            [class^="icon-"]:before {
                font-size: 2em;
                padding:.1em 0 .1em 0;
            }
            &:focus {
                outline:none;
            }
            &:hover {
                
                box-shadow: -3px 3px 6px 0 black,0 0 20px ${props => props.neonColor};
                border: double 6px rgba(${props =>props.neonColor},.8);
                    [class^="icon-"]:before {
                    color:rgba(${props => props.neonColor},1);
                    }
            }
        }
    
        ${ButtonCode} {
            &:hover {
                border: double 6px rgba(${props => props.isDisabled === 'disabled'? '100,100,100': props.neonColor},.8);
                [class^="icon-"]:before {
                    color:rgba(${props => props.isDisabled === 'disabled'? '100,100,100': props.neonColor},1);
                    }
            }
        }
    `;
    

    
    export default AnimateLoad(ProjectsCard);

    