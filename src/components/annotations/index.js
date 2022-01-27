import './styles.css';

import EssaySentence from './essaySentence/index.js';
import Segment from './segment/index.js';


function Annotations(props) {
  var annotations = props.annotations;
  var colours = {};

  const assignColours = (value, index, array) => {
    colours[value] = '#'+Math.floor(Math.random()*6777215).toString(16);
  }

  var names = annotations.map(x => {return x[0]});
  names.forEach(assignColours);


  return(
    <div className="annotations-container">
      {
        annotations.length == 0 ?
          <div className="wait-screen">
            Processing
          </div>
        :
          props.fileType == "essay" ?
            <div className="essay-container">
              <div className="essay-header">
                <div className="essay-title">
                  Annotated Transcript
                </div>
              </div>
              <div className="essay-sentence-container">
                {
                  annotations.map((item, index) => 
                    <EssaySentence text={item[0]} entropy={item[1]} key={index}/>
                  )
                }
              </div>
            </div>
          :
            <div className="transcript-container">
              <div className="transcript-header">
                <div className="transcript-title">
                  Annotated Transcript
                </div>
              </div>
              <div className="segments-container">
                {
                  annotations.map((item, index) => 
                    <Segment segment={item} count={index} key={index}/>
                  )
                }
              </div>
            </div>
      }
    </div>
  );
}

export default Annotations;