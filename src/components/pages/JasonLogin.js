import React, { Component } from 'react';
import auth from '../auth.js';

class JasonLogin extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "black" }}>You Like That</h1>
                <button onClick={() => {auth.login(() => {
                        this.props.history.push("/guide-form");
                    });
                }}>Login</button>
            </div>
        );
    }
}

export default JasonLogin;