import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './styles.css';

import Button from './../button/index.js';

const axios = require('axios').default;

function UploadModal(props) {
  const handleChangeType = (event) => {
    props.setfile(null);
    props.setAnnotations([]);
    props.setfiletype(event.target.value);
  }

  const handleUpload = () => {
    props.onHide();
    props.setAnnotations([]);

    var file = props.file;

    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      props.setfile([reader.result]);
    }.bind(this);

    axios.post(process.env.REACT_APP_POST_URL, file, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
      },
      params: {
        'type': props.filetype,
        'num_speakers': props.nspeakers,
        'seg_len': props.seglen,
        'sen_len': props.senlen,
      }
    })
      .then((response) => {
        props.setAnnotations(response.data);
      }).catch((error) => {
        props.setShowWait(false);
        if (error.response) {
          if (error.response.status == "502") {
            props.setErrorText("Your file is too large.  We're working on fixing this, how about trying a smaller file while we do?");
          }
          else {
            props.setErrorText(`Processing of your file failed with status ${error.response.status} (${error.response.statusText}).`);
          }
        }
      });
  }


  return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Parameters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fileType">
            <Form.Label>Select type of file to annotate</Form.Label>
            <Form.Select onChange={(e) => handleChangeType(e)}>
              <option value="audio">Audio</option>
              <option value="transcript">Transcript</option>
              <option value="essay">Essay</option>
            </Form.Select>
          </Form.Group>
          {
            props.filetype == "audio" ?
              <Form.Group controlId="numSpeakers">
                <Form.Label>Number of Speakers</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="2"
                  onChange={(e) => 
                    props.setnspeakers(e.target.value)
                  }
                />
              </Form.Group>
            : null
          }
          {
            props.filetype == "audio" ?
              <Form.Group controlId="segLen">
                <Form.Label>Length of segments to split audio into</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Default: 150" 
                  onChange={(e) => 
                    props.setseglen(e.target.value)
                  }
                />
              </Form.Group>
            : null
          }
          {
            props.filetype == "audio" ?
              <Form.Group controlId="senLen">
                <Form.Label>Number of words to average entropy over</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Default: 10" 
                  onChange={(e) => 
                    props.setsenlen(e.target.value)
                  }
                />
              </Form.Group>
            : null
          }
          {
            props.filetype == "audio" ?
              <Form.Group controlId="fileUpload">
                <Form.Label>Upload audio file</Form.Label>
                <Form.Control type="file" accept="audio/*" onChange={(e) => props.setfile(e.target.files[0])}/>
              </Form.Group>
            :
              props.filetype == "transcript" ?
                <Form.Group controlId="fileUpload">
                  <Form.Label>Upload transcript (File should be lines of the form name: text, with text having proper sentences)</Form.Label>
                  <Form.Control type="file" accept=".txt" onChange={(e) => props.setfile(e.target.files[0])}/>
                </Form.Group>
              :
                <Form.Group controlId="fileUpload">
                  <Form.Label>Upload essay</Form.Label>
                  <Form.Control type="file" accept=".txt" onChange={(e) => props.setfile(e.target.files[0])}/>
                </Form.Group>
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type={"modal"} text={"Go"} onClick={handleUpload}/>
      </Modal.Footer>
    </Modal>
  );
}

export default UploadModal;