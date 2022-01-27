import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Uploader from './components/uploader/index.js';
import Parameters from './components/parameters/index.js';
import Annotations from './components/annotations/index.js';
import Player from './components/player/index.js';
import UploadModal from './components/uploadModal/index.js';

function App() {
  const [file, setFile] = React.useState(null);
  const [numSpeakers, setNumSpeakers] = React.useState(2);
  const [segLen, setSegLen] = React.useState(150);
  const [senLen, setSenLen] = React.useState(10);
  const [fileType, setFileType] = React.useState("audio");
  const [annotations, setAnnotations] = React.useState([]);
  const [uploadModalShow, setUploadModalShow] = React.useState(false);

  return (
    <div className="main">
      <div className="body">
        {
          file == null ? 
            <div className="buffer"/>
          : null
        }
        <div className="audio">
          <div className="upload-params">
            <Uploader modalShow={setUploadModalShow}/>
          </div>
          {
            file == null || fileType != "audio" ? null : <Player audio={file} id={0}/>
          }
        </div>
        {
          file == null ? 
            <div className="upload-tip">
              Make sure you set the parameters right!
            </div>
         :
            <Annotations fileType={fileType} annotations={annotations}/>
        }
      </div>
      <UploadModal
        show={uploadModalShow}
        setnspeakers={setNumSpeakers}
        setseglen={setSegLen}
        setsenlen={setSenLen}
        setfiletype={setFileType}
        setfile={setFile}
        nspeakers={numSpeakers}
        seglen={segLen}
        senlen={senLen}
        filetype={fileType}
        file={file}
        setAnnotations={setAnnotations}
        onHide={() => setUploadModalShow(false)}
      />
    </div>
  );
}

export default App;
