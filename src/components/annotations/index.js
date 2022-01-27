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
    <div className="annotations-container-outer">
      {
        annotations.length == 0 ?
          <div className="wait-screen">
            Processing
          </div>
        :
          <div className="annotations-container-inner">
            <div className="annotations-header">
              <div className="annotations-title">
                Annotated Transcript
              </div>
            </div>
            <div className="annotations-segments">
              {
                annotations.map((item, index) => 
                  props.fileType == "essay" ?
                    <EssaySentence text={item[0]} entropy={item[1]} key={index}/>
                  :
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