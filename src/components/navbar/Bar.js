import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Bar({userName, IsUserLogged , handleLogOff, handleAlbums, handleMovies}) {

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href="#home">Reactomundo!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {(IsUserLogged && 
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <NavDropdown title={userName} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOff}>Deslogear</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link onClick = {handleAlbums} >Discos</Nav.Link>
            <Nav.Link onClick = {handleMovies} >Peliculas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        )}
      </Navbar>
  );
}

export default Bar;
