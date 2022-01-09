import './styles.css';


function Sentence(props) {
  var text = props.text;
  var entropy = props.entropy;


  return(
    <div className="sentence-container">
      <div className="sentence-text">
        {text}
      </div>
      <div className="sentence-entropy">
        {entropy.toFixed(3)}
      </div>
    </div>
  );
}

export default Sentence;