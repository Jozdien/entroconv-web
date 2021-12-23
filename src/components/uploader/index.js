import React from 'react';
import './styles.css';

import Button from './../button/index.js';

function Uploader(props) {
  const hiddenFileInput = React.useRef(null);


  const handleUpload = (event) => {
    var audio = event.target.files[0];

    var reader = new FileReader();
    var url = reader.readAsDataURL(audio);

    reader.onloadend = function(e) {
      props.setAudio([reader.result]);
    }.bind(this);

    console.log(audio);
  }


  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }


  return(
    <div className="uploader-container">
      <input type="file" accept="audio/*" onChange={handleUpload} ref={hiddenFileInput} style={{display: 'none'}}/>
      <Button onClick={handleClick} disabled={false} text={"Upload"}/>
    </div>
  );
}

export default Uploader;