import React from 'react';
import './App.css';

import Uploader from './components/uploader/index.js';
import Transcript from './components/transcript/index.js';

function App() {
  const [audio, setAudio] = React.useState(null);
  const [transcript, setTranscript] = React.useState("");

  return (
    <div className="main">
      <div className="body">
        <div className="audio">
          <Uploader setAudio={setAudio}/>
        </div>
        <div className="output">
          <Transcript transcript={transcript}/>
        </div>
      </div>
    </div>
  );
}

export default App;
