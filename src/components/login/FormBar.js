import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import PropTypes from 'prop-types';

class FormBar extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
      };

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
                <button onClick={this.props.logout}> Logout </button>
            </div>
        );
    }
}

export default connect(
    null,
    { logout }
)(FormBar);