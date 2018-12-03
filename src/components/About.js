import React, {Component, Fragment} from 'react';
import '../css/fontello.css';
import styled ,{keyframes} from 'styled-components';
import ImgFace from '../Images/face-min.png';

class About extends Component {
  state={more:false};

  handleMore= () => {
  this.setState({more: !this.state.more})
  }

  render() {
    return (
        <AboutMeWrapper>
              {this.state.more? 
              <div>
              <AboutMeStackContainer>
              <div className='tech'>
                <h1 >Technologies</h1>
                <ul>
                  <li><i className='icon-html5-1'></i>HTML5</li>
                  <li><i className='icon-css3-1'></i>CSS3</li>
                  <li><i className='icon-sass-original'></i>Sass</li>
                  <li><i className='icon-javascript'></i>JavaScript (ES6+)</li>
                  <li><i className='icon-react'></i>React</li>
                  <li><i className='icon-node'></i>NodeJS</li>
                  <li><i className='icon-express-original'></i>ExpressJS</li>
                  <li><i className='icon-postgresql-plain'></i>PostgreSQL</li>
                </ul>
              </div>
              <div className='tools'>
                <h1 >Tools</h1>
                <ul>
                <li><i className='icon-git-plain'></i>Git/GitHub</li>
                  <li><i className='icon-npm'></i>npm</li>
                  <li><i className='icon-visualstudio-plain'></i>Visual Studio Code</li>
                  <li><i className='icon-heroku-original-wordmark'></i>Heroku</li>
                  <li><i className='icon-knex'></i>Knex.js</li>
                  <li><i className='icon-nodemon'></i>Nodemon</li>
                  <li><i className='icon-bootstrap-plain'></i>Bootstrap</li>
                  <li><i className='icon-wordpress-plain'></i>Wordpress</li>
                </ul>
              </div>
              <div className='other'>
                <h1 >Other</h1>
                <ul>
                  <li>Responsive Design Implementation</li>
                  <li>Performance optimization</li>
                  <li>Security</li>
                  <li>Contributing to open source</li>
                </ul>
              </div>
              </AboutMeStackContainer>
              <p onClick={this.handleMore} className='back-button'> {`<--Back`} </p>
              </div>
              :
              <Fragment>
            <AboutMeInfoContainer>
                <AboutMeImg src={ImgFace} alt='portrait on the wall' />
                <span>{`My name is Krystian and I am currently looking for a job as a Front-End Developer. Actually, I learn a lot and gain experience every single day by making my own projects and trying out new solutions.\nI value creative approach, keeping in mind best UI patterns using new technologies. That's why I find passion in creating stuff in React (like this SPA or`} 
                    <a target='_blank' rel="noopener noreferrer" href='https://dziukers.github.io/Star-Wars-App/'> {`Star Wars App`}</a> {`).`}<p>I also have experience with back-end technologies such as Express.js and PostgreSQL. In the near future, I would like to build my first Progressive Web App and try out <a target='_blank' rel="noopener noreferrer" href='https://www.gatsbyjs.org'>GatsbyJS</a>.</p><p></p>
                </span>
            </AboutMeInfoContainer>
                <p onClick={this.handleMore} className='more-button'>{`My skills -->`}</p>
            <AboutMeFontelloIcons>
                <i className='icon-html5-1'></i>
                <i className='icon-css3-1'></i>
                <i className='icon-javascript'></i>
                <i className='icon-react'></i>
                <i className='icon-sass-original'></i>
                <i className='icon-node'></i>
            </AboutMeFontelloIcons>
            </Fragment>
            }
        </AboutMeWrapper>
    )
  }
}

const turnon = keyframes `
  100%{text-shadow: 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;color:#fee}
`;
const show = keyframes `
  100%{opacity:1}
`;
const AboutMeWrapper = styled.div`
    max-width: 1000px;
    font-size: 1.30em;
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
    
    p.more-button{
      text-align:right;
      color:white;
      text-shadow: 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
    font-size:1.3em;
    cursor:pointer;
    }
    p.back-button {
      text-align:left;
      color:white;
      text-shadow: 0 0 1em #4286f4, 0 0 0.5em #4286f4, 0 0 0.1em #4286f4, 0 10px 3px #000;
    font-size:1.3em;
    cursor:pointer;
    }
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
    text-shadow: 0 0 5px cyan;
    }
    `;
 const AboutMeStackContainer = styled.div `
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  @media (max-width:1024px) {
    flex-flow:column wrap;
  justify-content:center;
  align-items:center;
  }
  div{
    width:250px;
    @media (max-width:1024px) {
      margin:0 auto;
    }
  }
    h1{
      text-align:center;
      color: gray;
      font-family: 'Vibur', cursive;
      font-weight: normal;
    }
    ul{
      padding:0;
      list-style:none;

      li{
        text-align:left;
        i:before{
          width:30px;
         padding-right:1em;
        }
      }
    }
    div.tech{h1{animation:${turnon} 0.2s 1 0.4s forwards};ul{opacity:0;animation:${show} 0.2s 1 0.4s forwards}}
    div.tools{h1{animation:${turnon} 0.2s 1 0.7s forwards};ul{opacity:0;animation:${show} 0.2s 1 0.7s forwards}}
    div.other{
    h1{animation:${turnon} 0.2s 1 1s forwards};
    ul{opacity:0;animation:${show} 0.2s 1 1s forwards;
      li{
          list-style-type: disc;
        }
        }}
    
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
  0 0 500px rgba(203, 56, 55,1)
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
  0 0 500px rgba(21, 114, 182,1)
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
  0 0 500px rgba(247, 223, 30,1)
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
  0 0 500px rgba(97, 218, 251,1)
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
  0 0 500px rgba(51, 153, 51,1)
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
  0 0 500px rgba(51, 153, 51,1)
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
  0 0 500px rgba(227, 79, 38,1)
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
  0 0 500px rgba(21, 114, 182,1)
} /* '' */
i.icon-sass-original:hover:before {
  color:white;
  text-shadow:
  0 0 0 transparent,
  0 0 10px rgb(204, 102, 153),
  0 0 20px rgba(204, 102, 153,.5),
  0 0 40px rgba(204, 102, 153,1),
  0 0 100px rgba(204, 102, 153,1),
  0 0 200px rgba(204, 102, 153,1),
  0 0 300px rgba(204, 102, 153,1),
  0 0 500px rgba(204, 102, 153,1)
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