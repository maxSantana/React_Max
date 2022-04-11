import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartIcon from './CartIcon';


const NavBar = () => {
    return (
        <div>
            
            <Navbar bg="light" expand="lg">
                <Container>    
                <CartIcon />
                    <Navbar.Brand href="#home">E-Music Max</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                                       
                            <NavDropdown title="Fender" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Stratocaster</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Telecaster</NavDropdown.Item>
                           
                            </NavDropdown>
                            <NavDropdown title="Ibanez" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">RG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">AZ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">JS - Pia</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Paul Reed Smith" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">408</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Custom 24</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">McCarty</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    )
}

export default NavBar;



