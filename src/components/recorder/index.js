import React, {useEffect} from 'react';
import './styles.css';
import MicRecorder from 'mic-recorder-to-mp3';

import Button from './../button/index.js';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });


function Recorder(props) {
  const [isRecording, setisRecording] = React.useState(false);


  const start = () => {
    if (props.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setisRecording(true);
        }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        if(blob.size > 600){
          props.handleRecording(blobURL);
        }
        setisRecording(false);
      }).catch((e) => console.log(e));
  };

  useEffect(() => {
    const audioTimer = setTimeout(() => {
      if(isRecording){
        stop();
        start();
      }
    }, 10000);

    return () => clearTimeout(audioTimer);
  });


  return(
    <div className="recorder-container">
      <Button onClick={start} disabled={isRecording} text={"Record"}/>
      <Button onClick={stop} disabled={!isRecording} text={"Stop"}/>
    </div>
  );
}

export default Recorder;