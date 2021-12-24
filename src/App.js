import React from 'react';
import './App.css';

import Uploader from './components/uploader/index.js';
import Transcript from './components/transcript/index.js';
import Player from './components/player/index.js';

function App() {
  const [audio, setAudio] = React.useState(null);
  const [transcript, setTranscript] = React.useState([
                                        ["speaker_0", [
                                          ["Line 1.", -50], 
                                          ["Line 2.", -100]
                                        ]], 
                                        ["speaker_1", [
                                          ["Line 3.", -20]
                                        ]],
                                      ]);

  return (
    <div className="main">
      <div className="body">
        <div className="audio">
          <Uploader setAudio={setAudio}/>
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
    </div>
  );
}

export default App;
