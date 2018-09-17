import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../App.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Container = ({location}) => {
        return (
            <div className='Container'>
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    timeout={900}
                    classNames='fade'
                    >
                        <div className='page'>
                        <Switch location={location}>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/projects' component={Projects} />
                            <Route path='/contact' component={Contact} />
                        </Switch>
                    </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
    )
}

export default withRouter(Container);