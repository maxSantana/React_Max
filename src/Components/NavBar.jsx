import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            
            <Navbar bg="light" expand="lg">
                <Container>    
                <CartIcon />
                    <Navbar.Brand href="#home"><Link to="/">E-Music Max</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                                       
                            <NavDropdown title="Fender" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link to="/categoria/Stratocaster">Stratocaster</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link to="/categoria/Telecaster">Telecaster</Link></NavDropdown.Item>
                           
                            </NavDropdown>
                            <NavDropdown title="Ibanez" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link to="/categoria/RG">RG</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link to="/categoria/AZ">AZ</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link to="/categoria/JSPIA">JS - Pia</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Paul Reed Smith" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link to="/categoria/408">408</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link to="/categoria/Custom24">Custom 24</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link to="/categoria/McCarty">McCarty</Link></NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    )
}

export default NavBar;



