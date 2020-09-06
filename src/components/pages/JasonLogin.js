import React, { Component } from 'react';
import auth from '../auth.js';

class JasonLogin extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "black" }}>You Like That</h1>

                <input type="text" placeholder="Username"></input><br/><br/>
                <input type="password" placeholder="Password"></input><br/><br/>

                <button onClick={() => {auth.login(() => {
                        this.props.history.push("/guides-form");
                    });
                }}>Login</button>
            </div>
        );
    }
}

export default JasonLogin;