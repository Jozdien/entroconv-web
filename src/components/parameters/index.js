import React from 'react';
import './styles.css';

import paramsIcon from "../../icons/params.png";

import Button from './../button/index.js';

function Parameters(props) {
  return(
    <div className="parameters-container">
      <Button type={"parameters"} onClick={() => props.modalShow(true)} disabled={false} icon={paramsIcon}/>
    </div>
  );
}

export default Parameters;