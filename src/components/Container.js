import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Transition, config } from 'react-spring'
import styled from 'styled-components';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Container = ({location}) => {
        return (
            <Page>
            <Transition
              config={{tension: 50, friction: 10}}
              keys={location.pathname}
              from={{transform:'translateY(50px)',opacity: 0, filter:'blur(20px)'}}
              enter={{transform:'translateY(0px)',opacity: 1,filter:'blur(0px)'}}
              leave={{transform:'translateY(50px)',opacity: 0,filter:'blur(20px)'}}>
              {style => (
                        <div className={location.pathname === '/projects' ? 'page z-index' : 'page'}>
                        <Switch location={location}>
                            <Route exact path='/' render={props => Home({ ...props, style })} /> 
                            <Route path='/about' render={props => About({ ...props, style })} />
                            <Route path='/projects' render={props => Projects({ ...props, style })} /> 
                            <Route path='/contact' render={props => Contact({ ...props, style })} /> 
                        </Switch>
                    </div>
              )}
            </Transition>
            </Page>
    )
}
  const Page = styled.section`

    div.page {
    position:absolute;
    left:0;
    right:0;
    }

    div.z-index{
    z-index: 3;
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
