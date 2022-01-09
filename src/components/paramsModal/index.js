import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './styles.css';

import Button from './../button/index.js';

function ParamsModal(props) {
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
          <Form.Group controlId="segLen">
            <Form.Label>Length of segments to split audio into</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="150" 
              onChange={(e) => 
                props.setseglen(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="senLen">
            <Form.Label>Number of words to average entropy over</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="10" 
              onChange={(e) => 
                props.setsenlen(e.target.value)
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type={"modal"} text={"OK"} onClick={props.onHide}/>
      </Modal.Footer>
    </Modal>
  );
}

export default ParamsModal;