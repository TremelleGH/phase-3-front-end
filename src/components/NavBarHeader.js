import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'boxicons';


function NavBarHeader() {
  return (
    <div>
         <Navbar bg="light" variant="light">
        <Container>
        <box-icon name="building-house" type="logo"></box-icon>
        <Navbar.Brand href="#home">Namas Casas</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#buy">Buy</Nav.Link>
            <Nav.Link href="#rent">Rent</Nav.Link>
            <Nav.Link href="#agency">Agency Finder</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end" >
        <Navbar.Text>
        <button><box-icon name="user-circle" type="solid"></box-icon></button>
        </Navbar.Text>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBarHeader