import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { logout } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
      };

      static propTypes = {
        auth: PropTypes.object.isRequired,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
      };
    
      componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
          if (error.id === 'LOGIN_FAIL') {
            this.setState({ msg: error.msg.msg });
          } else {
            this.setState({ msg: null });
          }
        }
      }
    
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const { email, password } = this.state;
    
        const user = {
          email,
          password
        };
    
        // Attempt to login
        this.props.login(user);

      };

      logout = () => {
        this.props.clearErrors();
        this.props.logout();
      }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
          <div>
          {isAuthenticated ? 
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
                <button onClick={this.logout}> Logout </button>
            </div>
           : 
            <div>
            <h1 style={{ color: "black", textAlign: "center" }}>You Like That</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            className='mb-3'
                            onChange={this.onChange}
                        /><br/>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            className='mb-3'
                            onChange={this.onChange}
                        /><br/>
                        <button color='dark'> Login </button>
                        <div>{this.state.msg ? this.state.msg : null} </div>
                    </div>
                </form>
            </div>
            </div>
          }
          </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
  });

export default connect(
    mapStateToProps,
    { login, clearErrors, logout }
)(Login);