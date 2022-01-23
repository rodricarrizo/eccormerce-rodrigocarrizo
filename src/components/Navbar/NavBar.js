import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="blue" expand="lg">
    <Container>
      <Navbar.Brand href="#Tienda">Mi tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Menu">Menu</Nav.Link>
          <Nav.Link href="#contactanos">Contactanos</Nav.Link>
          <NavDropdown title="Compras" id="basic-nav-dropdown">
            <NavDropdown.Item href="#zapas">Zapatillas</NavDropdown.Item>
            <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#buzos">Buzos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#ofertas">Ofertas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
