import React, { Component } from 'react';
import GuidesItem from './GuidesItem';
import axios from 'axios';

class Guides extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guides: []
        }
    }

    componentDidMount() {
        axios.get('https://nec-mongodb.herokuapp.com/guides/')
          .then(response => {
            this.setState({
                guides: response.data
            })
          })
          .catch(function (error) {
            console.log(error);
          })
        }

    render () {
        return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <span className="banner"><img src={ process.env.PUBLIC_URL + '/assets/guides/banner.jpg'} style={{ width:"100%" }} alt="guides-banner"></img></span>
                    <h1 style={{ textAlign: "center", position: "absolute" }}>Guides</h1>
                </div>
            </div>

            <div className="container">
                    <div className="row">
                        <span style= {{ margin: "0px 10px 25px 10px", textAlign: "center" }} className="main_text">
                            Here, you'll find comprehensive summaries and tips of various topics that I feel that I'm really knowledgeable about - my goal is to pass my knowledge and experience down to others! A list of my guides is below, and they should redirect to another link. But if there is no link, the guide is in progress - thank you for your patience!
                        </span>
                    </div>
                    
                    <GuidesItem guides={this.state.guides}/>

            </div>
        </div>
        );
    }
}

export default Guides;
