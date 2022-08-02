import React from "react";
import './App.css';
import NavBarHeader from "./components/NavBarHeader";
import Home from "./components/Home";
import Banners from './components/Banners';
import {Navbar, Nav, Container} from 'react-bootstrap'



function App() {
 
  return (
    <div className="App">
      <NavBarHeader/>
      <h1>
      <Home/>
      </h1>
      <Banners/>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Namas Casas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
