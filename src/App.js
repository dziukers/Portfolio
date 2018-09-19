import React, { Component } from 'react';
import Sound from './components/Sound';
import Container from './components/Container'
import Navbar from './components/Navbar';
import Fog from './components/Fog';

import LoadingScreen from 'react-loading-screen';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
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
