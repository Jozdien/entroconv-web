import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Uploader from './components/uploader/index.js';
import Parameters from './components/parameters/index.js';
import Transcript from './components/transcript/index.js';
import Player from './components/player/index.js';
import ParamsModal from './components/paramsModal/index.js';

function App() {
  const [audio, setAudio] = React.useState(null);
  const [numSpeakers, setNumSpeakers] = React.useState(2);
  const [segLen, setSegLen] = React.useState(150);
  const [senLen, setSenLen] = React.useState(10);
  const [transcript, setTranscript] = React.useState(
    [
      [
        ['speaker_0', [['eleven twenty seven fifty seven', -6.642832660675049]]], 
        ['speaker_1', [['october twenty fourth nineteen seventy', -5.9923481941223145]]], 
      ], 
      [
        ['speaker_1', [['october twenty fourth nineteen seventy', -9.285529518127442]]], 
      ]
    ]);
  const [paramsModalShow, setParamsModalShow] = React.useState(false);

  return (
    <div className="main">
      <div className="body">
        <div className="audio">
          <div className="upload-params">
            <Uploader setAudio={setAudio} numSpeakers={numSpeakers} segLen={segLen} senLen={senLen} setTranscript={setTranscript}/>
            <Parameters modalShow={setParamsModalShow}/>
          </div>
          {
            audio == null ? null : <Player audio={audio} id={0}/>
          }
        </div>
        {
          audio == null ? null :
          <div className="output">
            <Transcript transcript={transcript}/>
          </div>
        }
      </div>
      <ParamsModal
        show={paramsModalShow}
        setnspeakers={setNumSpeakers}
        setseglen={setSegLen}
        setsenlen={setSenLen}
        onHide={() => setParamsModalShow(false)}
      />
    </div>
  );
}

export default App;
