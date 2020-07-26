import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Bar({userName}) {

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href="#home">Reactomundo!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <NavDropdown title={userName} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deslogear</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Discos</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Peliculas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Bar;
