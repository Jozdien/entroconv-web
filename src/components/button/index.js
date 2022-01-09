import './styles.css';

function Button(props) {
  if(props.type == "uploader") {
    return(
      <div className="uploader-container" onClick={props.onClick} disabled={props.disabled}>
        <div className="uploader-text">
          {props.text}
        </div>
      </div>
    );
  }
  else if(props.type == "parameters") {
    return(
      <div className="params-container" onClick={props.onClick} disabled={props.disabled}>
        <img src={props.icon} alt="Settings" width="25" height="25"/>
      </div>
    );
  }
  else if(props.type == "modal") {
    return(
      <div className="modal-hover">
        <div className="modal-container" onClick={props.onClick} disabled={props.disabled}>
          <div className="modal-text">
            {props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Button;