import React from 'react';
import Modal from 'react-bootstrap';
import LoadingImage from '../../commons/loadingImage/LoadingImage'

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
          alert('Ocurrio un problema cuando intentábamos cargar la imagen, probá relogear!');
        }
        else{
          response.json().then(json => 
            {
              resolve(json.image);
            }
          )
        }
      })
      .catch(function(error) {
        alert('Ocurrio un problema cuando intentábamos cargar la imagen, seguramente nos olvidamos de pagar los servidores!');
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <LoadingImage handler = {handleImage}/>
            </Col>
            <Col xs={12} md={8}>
              Info extra
            </Col>
          </Row>
        </Container>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }