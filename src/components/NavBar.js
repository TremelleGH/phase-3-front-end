import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'boxicons';
import {Link} from "react-router-dom"


function NavBarHeader() {
  return (
    <div style={{position:"sticky"}}>
         <Navbar bg="light" variant="light">
        <Container>
        <box-icon name="building-house" type="logo"></box-icon>
        <Navbar.Brand as={Link} to={"/"}><h1>Namas Casas</h1></Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/buy"}>Buy</Nav.Link>
            <Nav.Link as={Link} to={"/rent"}>Rent</Nav.Link>
            <Nav.Link as={Link} to={"/createListing"}>Create Listing</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end" >
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBarHeader