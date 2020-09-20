import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
      };

      static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
      };
    
      componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
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

    render() {
        return (
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
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });

export default connect(
    mapStateToProps,
    { login, clearErrors }
)(Login);