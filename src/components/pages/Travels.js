import React, { Component } from 'react';
import jason_bridge from "../../assets/travels/IMG_0026.jpg";
import square from "../../assets/travels/square.png";
import TravelsItem from './TravelsItem';

class Travels extends Component {
    state = {
        continents: [
            {
                id: 1,
                continent: 'Asia/Oceania',
                image: square
                },
            {
                id: 2,
                continent: 'The Americas',
                image: square
                },
            {
                id: 3,
                continent: 'Europe',
                image: square
                },
            {
                id: 4,
                continent: 'Africa/Middle East',
                image: square
                }
        ]
    }

    render () {
        return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <span className="banner"><img src={jason_bridge} alt="travels-banner" style={{ width:"100%" }}></img></span>
                    <h1 style={{ textAlign: "center", position: "absolute" }}>Travels</h1>
                </div>
            </div>

            <div className="container">
                <div className="row m-4">
                    <span style={{ margin: "0px 10px 25px 10px", textAlign: "center" }} className="main_text">
                        I've had the great opportunity to solo travel to a wide variety of locations around the globe. Self-funding my trips is an arduous yet rewarding experience because I get to be truly independent when I go abroad. I fully believe that solo traveling has many, many rewards that you can't get from traveling with family or friends. <br/><br/>

                        I've spent quite a bit of money traveling but I don't regret it one bit. I am very, very lucky because none of this would have been possible if I didn't start saving since high school, and the fact that I got my tuition and books covered for most of my years at university. But most importantly, I also thank my family & friends for their help. If a specific city does not redirect to a new page, the guide is in progress - thank you for your patience!
                    </span>
                </div>

                <iframe src="https://www.google.com/maps/d/embed?mid=1HBFnFKX9wrbJrQADXUo3SFMQZcUKO4kH" style={{ width: "100%", height:"600px" }} title="my travels"></iframe>

                <TravelsItem continents={this.state.continents}/>

            </div>

        </div>
        );
    }
}

export default Travels;
