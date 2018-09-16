import React, {Component} from 'react';
import {Howl} from 'howler';
import '../App.css';

var sound = new Howl({
    src: ['https://kennethjensen.net/sound/neon-city-ambience.ogg'],
    html5: true,
    preload: true,
    volume: 0.2,
    sprite: {
      ambience: [0, 23995, true]
    }
  });

class Sound extends Component {
    constructor() {
        super();
        this.state = {
            playing:false
        };
    }

    startMusic =() => {
        this.setState ({
          playing: !this.state.playing})
        this.state.playing ? sound.stop(): sound.play('ambience');
        
      }
render() {
    return (
        <div className="App__sound-button icon-sound" onClick={this.startMusic}>
            <div 
            className={this.state.playing ? 'App__sound-button--sound-on' : 'App__sound-button--sound-off'}>   
            </div>
          </div>
    )
}
}
export default Sound;