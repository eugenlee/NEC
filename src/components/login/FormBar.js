import React, { Component } from 'react';
import auth from './auth.js';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class FormBar extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "black" }}>Hi Jason, Welcome Back to Forms</h2>
                <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Link className="nav-item active" to="/travels/create">Create Travel</Link>
                    <Link className="nav-item active ml-lg-5 !important" to="/travels/edit">Edit Travel</Link>
                    <Link className="nav-item active ml-lg-5 !important" to="/guides/create">Create Guide</Link>
                    <Link className="nav-item active ml-lg-5 !important" to="/guides/edit">Edit Guide</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <br/><br/>
                <button onClick={() => {auth.logout(() => {
                    this.props.history.push("/");
                    });
                }}> Logout </button>
            </div>
        );
    }
}

export default FormBar;