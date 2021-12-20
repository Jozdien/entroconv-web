import './styles.css';

function Button(props) {
  return(
    <div className="button-container" onClick={props.onClick} disabled={props.disabled}>
      <div className="button-text">
        {props.text}
      </div>
    </div>
  );
}

export default Button;