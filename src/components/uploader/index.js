import React from 'react';
import './styles.css';

import Button from './../button/index.js';

const axios = require('axios').default;

function Uploader(props) {
  const hiddenFileInput = React.useRef(null);

  const handleUpload = (event) => {
    var audio = event.target.files[0];

    var reader = new FileReader();
    var url = reader.readAsDataURL(audio);

    reader.onloadend = function(e) {
      props.setAudio([reader.result]);
    }.bind(this);

    axios.post(process.env.REACT_APP_POST_URL, audio, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
      },
      params: {
        'num_speakers': props.numSpeakers,
        'seg_len': props.segLen,
        'sen_len': props.senLen,
      }
    })
      .then((response) => {
        props.setTranscript(response.data);
      }).catch((error) => {
        //handle error
      });
  }


  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }


  return(
    <div className="uploader-container">
      <input type="file" accept="audio/*" onChange={handleUpload} onClick={(event) => {event.target.value = null}} ref={hiddenFileInput} style={{display: 'none'}}/>
      <Button type={"uploader"} onClick={handleClick} disabled={false} text={"Upload"}/>
    </div>
  );
}

export default Uploader;