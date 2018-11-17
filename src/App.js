import React, { Component } from 'react';
import Sound from './components/Sound';
import Container from './components/Container'
import Navbar from './components/Navbar';
import Fog from './components/Fog';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import './index.css';

import LoadingScreen from 'react-loading-screen';


class App extends Component {
    state = {
      isLoading: true
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    this.setState({
      isLoading:false
    })
  }

  render() { 
    return (
      <LoadingScreen
        loading={this.state.isLoading}
        bgColor='#111111'
        spinnerColor='rgb(255,0,60)'
        textColor='#777'
        logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'
        text='Just wait for it...'
      > 
        <React.Fragment>
          <Particles className='particles' params={particlesConfig} />
          <Fog />
          <Navbar />
          <Container />
          <Sound />
        </React.Fragment>
      </LoadingScreen>
    );
  }

}

export default App;
