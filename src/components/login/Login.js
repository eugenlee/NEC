import React, { Component } from 'react';
import auth from './auth.js';
import { connect } from 'react-redux';
// import { login } from '../../actions/authAction';

class Login extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "black" }}>You Like That</h1>

                <input type="text" placeholder="Username"></input><br/><br/>
                <input type="password" placeholder="Password"></input><br/><br/>

                <button onClick={() => {auth.login(() => {
                        this.props.history.push("/forms");
                    });
                }}>Login</button>
            </div>
        );
    }
}

export default connect()(Login);