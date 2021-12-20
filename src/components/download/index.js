import { CSVLink } from "react-csv";
import './styles.css';

function Download(props) {
  var data = props.data;

  return(
    <div className="download-container">
      {
        data.length === 0 ?
          null
        :
          <CSVLink filename={"audio_data.csv"} data={data} className="download-button">
            Generate CSV
          </CSVLink>
      }
    </div>
  );
}

export default Download;