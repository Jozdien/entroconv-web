import React from 'react';
import './styles.css';

import playIcon from "../../../icons/play.png";
import pauseIcon from "../../../icons/pause.png";


function PlayButton(props) {
  const [paused, setPaused] = React.useState(true);

  const play = () => {
    document.getElementById(props.id).play();
    setPaused(false);
  }

  const pause = () => {
    document.getElementById(props.id).pause();
    setPaused(true);
  }

  var audio = document.getElementById(props.id);
  if(audio != null){
    audio.onended = function() {
      setPaused(true);
    };
  }
  
  
  return(
    <div className="playbutton-container">
      {
        paused ?
          <div onClick={play} className="play-button">
            <img src={playIcon} alt="Play" width="18" height="14"/>
          </div>
        :
          <div onClick={pause} className="play-button">
            <img src={pauseIcon} alt="Pause" width="14" height="14"/>
          </div>
      }
    </div>
  );
}

export default PlayButton;