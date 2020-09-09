import React, { Component } from 'react';
import auth from './auth.js';

class FormBar extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "black" }}>Forms</h1>
                <button onClick={() => {auth.logout(() => {
                    this.props.history.push("/");
                    });
                }}> Logout </button>
            </div>
        );
    }
}

export default FormBar;