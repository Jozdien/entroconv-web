import React from 'react';
import './styles.css';

import Button from './../button/index.js';

function Uploader(props) {
  return(
    <div className="uploader-container">
      <Button type={"uploader"} onClick={() => props.modalShow(true)} disabled={false} text={"Upload"}/>
    </div>
  );
}

export default Uploader;