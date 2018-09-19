import React, {Component} from 'react';
import {Howl} from 'howler';
import styled from 'styled-components';


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
        <SoundButton  onClick={this.startMusic}>
            <i className='icon-sound' />
            <div 
            className={this.state.playing ? 'sound-on' : 'sound-off'}>   
            </div>
        </SoundButton>
    )
}
}

const SoundButton = styled.div`
    z-index: 5;
    cursor: pointer;
    position:fixed;
    right:3em;
    bottom:3em;
    color:white;

    .icon-sound:before{
  font-size: 2em;
    }
    .sound-off:after {
    content:'\00d7';
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size: 4em;
    opacity:0.3;
    color:red;
  }
    .sound-on:after {
    content:'\00d7';
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size: 4em;
    opacity:0;
  }
    `;


export default Sound;