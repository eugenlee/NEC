import React from 'react';
import logo from "../../assets/NEC_logo_crop.png";
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigator">
        <Navbar expand="lg">
        <Navbar.Brand id="logo"><Link to="/"><img src={logo} style={{width: "150px"}} alt="homepage"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link className="nav-item active ml-lg-5"><Link className="nav-item active ml-lg- !important" to="/about">About</Link></Nav.Link>
            <Nav.Link className="nav-item active ml-lg-5"><Link className="nav-item active ml-lg- !important" to="/travels">Travels</Link></Nav.Link>
            <Nav.Link className="nav-item active ml-lg-5"><Link className="nav-item active ml-lg- !important" to="/guides">Guides</Link></Nav.Link>
            <Nav.Link className="nav-item active ml-lg-5"><Link className="nav-item active ml-lg- !important" to="/services">Services</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        </div>

    );
}

export default Navigation;
