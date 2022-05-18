import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import CartWidget from './Items/CartWidget';


const NavBar = () => {
    return (
        <div>            
            <Navbar bg="light" expand="lg">
                <Container>    
                    <Navbar.Brand href="#home"><Link style={{ textDecoration: "none"}} to="/">E-Music Max</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                                       
                            <NavDropdown title="Fender" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link style={{ textDecoration: "none"}} to="/categoria/Stratocaster">Stratocaster</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link style={{ textDecoration: "none"}} to="/categoria/Telecaster">Telecaster</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ibanez" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link style={{ textDecoration: "none"}} to="/categoria/RG">RG</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link style={{ textDecoration: "none"}} to="/categoria/AZ">AZ</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Paul Reed Smith" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2"><Link style={{ textDecoration: "none"}} to="/categoria/Custom">Custom</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link style={{ textDecoration: "none"}} to="/categoria/McCarty">McCarty</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                   
                    <CartWidget/>
                </Container>
            </Navbar>  
        </div>
    )
}

export default NavBar;



