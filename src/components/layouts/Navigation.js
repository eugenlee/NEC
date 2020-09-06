import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigator">
        <Navbar expand="lg">
        <Navbar.Brand id="logo"><Link to="/"><img src={ process.env.PUBLIC_URL + '/assets/NEC_logo_crop.png' }style={{width: "150px"}} alt="homepage"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link className="nav-item active ml-lg-5 !important" to="/about">About</Link>
            <Link className="nav-item active ml-lg-5 !important" to="/travels">Travels</Link>
            <Link className="nav-item active ml-lg-5 !important" to="/guides">Guides</Link>
            <Link className="nav-item active ml-lg-5 !important" to="/services">Services</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        </div>

    );
}

export default Navigation;
