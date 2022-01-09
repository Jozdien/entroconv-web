import './styles.css';

import Segment from './segment/index.js';


function Transcript(props) {
  var transcript = props.transcript;
  var colours = {};

  const assignColours = (value, index, array) => {
    colours[value] = '#'+Math.floor(Math.random()*6777215).toString(16);
  }

  var names = transcript.map(x => {return x[0]});
  names.forEach(assignColours);


  return(
    <div className="transcript-container">
      <div className="transcript-header">
        <div className="transcript-title">
          Annotated Transcript
        </div>
      </div>
      <div className="segments-container">
        {
          transcript.map((item, index) => 
            <Segment segment={item} count={index} key={index}/>
          )
        }
      </div>
    </div>
  );
}

export default Transcript;