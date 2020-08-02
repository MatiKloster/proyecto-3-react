import React from 'react';
import Modal from 'react-bootstrap/Modal';
import LoadingImage from '../../commons/loadingImage/LoadingImage';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingData from '../../commons/loadingData/LoadingData';
import { Jumbotron } from 'react-bootstrap';

const alertOnError = 'Ocurrio un problema cuando intentábamos cargar la informacion, seguramente nos olvidamos de pagar los servidores!';
const alertOn401 = 'Ocurrio un problema cuando intentábamos cargar el recurso, probá relogear!';

const handleImage = (url) => {
  var bearer = 'Bearer ' + localStorage.getItem('token');
  return new Promise((resolve) => 
      fetch(url, {
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        if (response.status === 401) {
          alert(alertOn401);
        }
        else{
          response.json().then(json => 
            {
              resolve(json.data.image);
            }
          )
        }
      })
      .catch(function(error) {
        alert(alertOnError);
    })
  );
}

const handleResource = (url) => {
  var bearer = 'Bearer ' + localStorage.getItem('token');
  return new Promise((resolve) => 
      fetch(url, {
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        if (response.status === 401) {
          alert(alertOn401);
        }
        else{
          response.json().then(json => 
            {
              resolve(json.data);
            }
          )
        }
      })
      .catch(function(error) {
        alert(alertOnError);
    })
  );
}

export default function ProductModal(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Vista personalizada
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Jumbotron>
          <Row>
            <Col xs={12} md={4}>
              <LoadingImage handler = {() => handleImage(props.imageUri)}/>
            </Col>
            <Col xs={12} md={8}>
              <LoadingData handler ={() => handleResource(props.resourceUri)}/>
            </Col>
          </Row>
        </Jumbotron>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }