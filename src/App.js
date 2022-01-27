import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Uploader from './components/uploader/index.js';
import Parameters from './components/parameters/index.js';
import Annotations from './components/annotations/index.js';
import Player from './components/player/index.js';
import ParamsModal from './components/paramsModal/index.js';

function App() {
  const [audio, setAudio] = React.useState(null);
  const [numSpeakers, setNumSpeakers] = React.useState(2);
  const [segLen, setSegLen] = React.useState(150);
  const [senLen, setSenLen] = React.useState(10);
  const [transcript, setTranscript] = React.useState([]);
  const [paramsModalShow, setParamsModalShow] = React.useState(false);

  return (
    <div className="main">
      <div className="body">
        {
          audio == null ? 
            <div className="buffer"/>
          : null
        }
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
          audio == null ? 
            <div className="upload-tip">
              Tip: Set the number of speakers in the parameters box!
            </div>
         :
            <Annotations transcript={transcript}/>
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
