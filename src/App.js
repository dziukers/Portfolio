import React, { Component } from 'react';
import './App.css';
import Sound from './components/Sound';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentWillMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.setState({
      isLoading:false
    })
  }

  render() { 
    return (
      this.state.isLoading ? 
      <LoadingScreen /> :
      <BrowserRouter>
        <div className="App">
        <div className='App__fog'></div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Sound />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
