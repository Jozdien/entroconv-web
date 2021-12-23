import React from 'react';
import './styles.css';

import PlayButton from './playbutton/index.js';
import ProgressBar from './progressbar/index.js';


function Player(props) {
  return(
    <div className="player-container">
      <audio id={props.id} src={props.audio}/>

      <PlayButton id={props.id}/>
      <ProgressBar id={props.id}/>
    </div>
  );
}

export default Player;