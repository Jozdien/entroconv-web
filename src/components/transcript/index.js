import './styles.css';

import Speaker from './speaker/index.js';

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
      <div className="text-container">
        {
          transcript.map((item, index) => 
            <Speaker speaker={item[0]} speech={item[1]} colour={colours[item[0]]}/>
          )
        }
      </div>
    </div>
  );
}

export default Transcript;