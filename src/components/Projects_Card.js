import React, {Component} from 'react';
import styled from 'styled-components';
import bg from '../Images/bg-dots.png';

    //key styles for card elements
const CardTitle = styled.h1``;
const CardImage = styled.img`
margin:3em 0;
width:90%;
height: auto;
align-self:center;
opacity:0.5;
transition: 0.5s ease;
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
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin:2em;
    padding:1em 0 0 0;
    box-sizing: border-box;
    position:relative;
    cursor: pointer;
    max-height: 80vh;
    background-color: #333;
    background-image: radial-gradient(circle at 50% -50%,  rgba(${props => props.color}, .7), transparent),linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${props => props.bg});
    box-shadow: 
    0px 50px 45px -15px rgba(0,0,0,.5),
    0px 20px 10px -5px rgba(0,0,0,.5),
    0px 5px 20px 0px rgba(0,0,0,.5);
    border:5px solid rgba(255,50,50,.1);
    border-radius: 28px;
  min-width:250px;
  max-width: 300px;
  transition: 0.3s ease;
  background-clip: padding-box;
  z-index:1;

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

        font-size: 16px;
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        color:transparent;
        text-shadow: 0 0 20px rgb(${props => props.color});
        border-bottom:double 6px rgba(${props => props.neonColor},.7);
        background: -webkit-linear-gradient(
        90deg,
        rgb(230,230,230), rgb(190,190,190)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
    text-align: center;
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


class Projects_Card extends Component{
    constructor(props) {
        super(props);
}

render () {
    const {children, primaryColor,neonColor, projectImg, technologies, linkPreview, linkCode} = this.props;
    const showIcon = technologies.map((technology, i) => {
        switch (technology) {
            case 'html' : return <i className='icon-html5' />;
            case 'css' : return <i className='icon-css3-1' />;
            case 'js' : return <i className='icon-javascript'/>;
            case 'react' : return <i className='icon-react' />;
            default: return null;
        }});

    return (
        <Card color={primaryColor} neonColor={neonColor} isDisabled={linkCode} bg={bg} >
            <CardTitle> {children} </CardTitle>
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
export default Projects_Card;

    