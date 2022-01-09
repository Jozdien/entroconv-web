import './styles.css';

import Sentence from './sentence/index.js';


function Speaker(props) {
  var speaker = props.speaker;
  var speech = props.speech;
  var colour = props.colour;


  return(
    <div className="speaker-container">
      <div className="speaker-name" style={{color: colour}}>
        {speaker}
      </div>
      <div className="speaker-text">
        {
          speech.map((item, index) => 
            <Sentence text={item[0]} entropy={item[1]} key={index}/>
          )
        }
      </div>
    </div>
  );
}

export default Speaker;