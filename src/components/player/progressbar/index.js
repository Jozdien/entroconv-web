import React, {useEffect} from 'react';
import './styles.css';


function ProgressBar(props) {
  const [progress, setProgress] = React.useState(0);

  var progressId = "progress" + props.id;

  useEffect(() => {
    const initialize = setTimeout(() => {
      var audio = document.getElementById(props.id);
      var progressBar = document.getElementById(progressId);

      if(audio != null){
        audio.ontimeupdate = function() {
          setProgress(audio.currentTime / audio.duration);
        };
      };

      var seeking = false;
      
      progressBar.onmousedown = function(event) {
        seeking = true;
        var new_progress = event.offsetX / progressBar.offsetWidth;
        if(new_progress > 1) new_progress = 1;
        setProgress(new_progress);
        audio.currentTime = audio.duration * new_progress;
      };

      progressBar.onmousemove = function(event) {
        if(seeking){
          var new_progress = event.offsetX / progressBar.offsetWidth;
          if(new_progress > 1) new_progress = 1;
          else if(new_progress < 0) new_progress = 0;
          setProgress(new_progress);
          audio.currentTime = audio.duration * new_progress;
        }
      };

      progressBar.onmouseup = function() {
        seeking = false;
      };

      progressBar.ontouchstart = function(event) {
        seeking = true;
        var new_progress = (event.touches[0].clientX - progressBar.offsetLeft) / progressBar.offsetWidth;
        if(new_progress > 1) new_progress = 1;
        setProgress(new_progress);
        audio.currentTime = audio.duration * new_progress;
      };

      progressBar.ontouchmove = function(event) {
        if(seeking){
          var new_progress = (event.touches[0].clientX - progressBar.offsetLeft) / progressBar.offsetWidth;
          if(new_progress > 1) new_progress = 1;
          else if(new_progress < 0) new_progress = 0;
          setProgress(new_progress);
          audio.currentTime = audio.duration * new_progress;
        }
      };

      progressBar.ontouchend = function() {
        seeking = false;
      };
    }, 1000);

    return () => clearTimeout(initialize);
  });

  
  return(
    <div className="progressbar-container">
      <input type="range" id={progressId} value={progress} max="1" className="progressbar"></input>
    </div>
  );
}

export default ProgressBar;