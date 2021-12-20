import React, {useEffect} from 'react';
import './styles.css';

import PlayButton from './playbutton/index.js';
import ProgressBar from './progressbar/index.js';


function Player(props) {
  useEffect(() => {
    const tooltip = setTimeout(() => {
      document.getElementById("tooltip").title = "P: " + props.prob;
    }, 100);

    return () => clearTimeout(tooltip);
  });

  return(
    <div className="player-container" style={{borderColor: props.class}} id="tooltip">
      <audio id={props.id} src={props.audio}/>

      <PlayButton id={props.id}/>
      <ProgressBar id={props.id}/>
    </div>
  );
}

export default Player;