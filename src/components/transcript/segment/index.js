import './styles.css';

import Speaker from './speaker/index.js';


function Segment(props) {
  var segment = props.segment;
  var colours = {};

  const assignColours = (value, index, array) => {
    colours[value] = '#'+Math.floor(Math.random()*6777215).toString(16);
  }

  var names = segment.map(x => {return x[0]});
  names.forEach(assignColours);


  return(
    <div className="segment-container">
      <div className="segment-name">
        Segment {props.count+1}
      </div>
      <div className="segment-text">
        {
          segment.map((item, index) => 
            <Speaker speaker={item[0]} speech={item[1]} colour={colours[item[0]]} key={index}/>
          )
        }
      </div>
    </div>
  );
}

export default Segment;