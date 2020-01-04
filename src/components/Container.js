import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, {keyframes} from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Container = ({location}) => {
        return (
            <Page>
              <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    timeout={900}
                    classNames='fade'
                    >
                        <div className={location.pathname === '/projects' ? 'page z-index' : 'page'}>
                        <Switch location={location}>
                            <Route exact path='/' component={Home} /> 
                            <Route path='/about' component={About} />
                            <Route path='/skills' component={Skills} />
                            <Route path='/projects' component={Projects}/> 
                            <Route path='/contact' component={Contact} /> 
                        </Switch>
                    </div> 
              </CSSTransition>
                </TransitionGroup>
            </Page>
    )
}

const show = keyframes`
  
  from {opacity:0; }
  to {opacity:1;}
`;

const hide = keyframes`
  from {opacity:1;}
		to{opacity:0;}
	`;
  const Page = styled.section`
  margin-bottom: 100px;
    div.page {
    position:absolute;
    left:0;
    right:0;
    }

    .z-index{
    z-index: 3;
    }
  .fade-enter.fade-enter-active {
    animation: ${show} 300ms linear 600ms both;
  }
  .fade-exit.fade-exit-active {
   
    animation: ${hide} 600ms linear both;
  
  }

    @media screen and (max-width: 1000px) {
      div.page {
      top:10em;
      }
    }
    @media screen and (max-width: 700px) {
      div.page {
      top:5em;
      }
    }
`;
export default withRouter(Container);
