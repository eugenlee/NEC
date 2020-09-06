import React, { Component } from 'react';
import TravelsItem from './TravelsItem';

class Travels extends Component {
    state = {
        travels: [
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/guilin.jpeg",
                "city": "Guilin",
                "country": "China",
                "link": "https://www.neverendingcycle.org/guilin.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/hongkong.jpg",
                "city": "Hong Kong",
                "country": "Chinese special administrative region",
                "link": "#",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/puerto.jpg",
                "city": "Puerto Princessa",
                "country": "Philippines",
                "link": "https://www.neverendingcycle.org/puerto-princesa.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/singapore.jpg",
                "city": "Singapore",
                "country": "Republic of Singapore",
                "link": "https://www.neverendingcycle.org/singapore.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/sydney.jpg",
                "city": "Sydney",
                "country": "Australia",
                "link": "https://www.neverendingcycle.org/sydney.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/shanghai.jpg",
                "city": "Shanghai",
                "country": "China",
                "link": "https://www.neverendingcycle.org/shanghai.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/yilan.jpg",
                "city": "Yilan",
                "country": "Taiwan",
                "link": "https://www.neverendingcycle.org/yilan.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/kuala.jpg",
                "city": "Kuala Lumpur",
                "country": "Malaysia",
                "link": "https://www.neverendingcycle.org/kualalumpur.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/seoul.jpg",
                "city": "Seoul",
                "country": "South Korea",
                "link": "https://www.neverendingcycle.org/seoul.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/melbourne.jpeg",
                "city": "Melbourne",
                "country": "Australia",
                "link": "https://www.neverendingcycle.org/melbourne.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/beijing.jpg",
                "city": "Beijing",
                "country": "China",
                "link": "https://www.neverendingcycle.org/beijing.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/tainan.jpeg",
                "city": "Tainan",
                "country": "Taiwan",
                "link": "https://www.neverendingcycle.org/tainan.html",
                "mainBody": " "
            },
            {
                "continent": "Asia/Oceania",
                "image": "/assets/travels/asia/hanoi.jpeg",
                "city": "Hanoi",
                "country": "Vietnam",
                "link": "https://www.neverendingcycle.org/hanoi.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/nyc.jpeg",
                "city": "New York City",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/new-york-city.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/chi.jpeg",
                "city": "Chicago",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/chicago.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/portland.jpeg",
                "city": "Portland",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/portland.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/boston.jpeg",
                "city": "Boston",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/boston.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/toronto.jpeg",
                "city": "Toronto",
                "country": "Canada",
                "link": "#",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/charlotte.jpeg",
                "city": "Charlotte",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/charlotte.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/honolulu.jpeg",
                "city": "Honolulu",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/honolulu.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/jacksonville.jpeg",
                "city": "Jacksonville",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/jacksonville.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/vancouver.jpeg",
                "city": "Vancouver",
                "country": "Canada",
                "link": "https://www.neverendingcycle.org/vancouver.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/minneapolis.jpeg",
                "city": "Minneapolis",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/minneapolis.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/seattle.jpeg",
                "city": "Seattle",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/seattle.html",
                "mainBody": " "
            },
            {
                "continent": "The Americas",
                "image": "/assets/travels/americas/dc.jpeg",
                "city": "Washington DC",
                "country": "United States",
                "link": "https://www.neverendingcycle.org/washingtondc.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/london.jpeg",
                "city": "London",
                "country": "United Kingdom",
                "link": "https://www.neverendingcycle.org/london.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/paris.JPG",
                "city": "Paris",
                "country": "France",
                "link": "https://www.neverendingcycle.org/paris.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/edinburgh.jpeg",
                "city": "Edinburgh",
                "country": "Scotland",
                "link": "https://www.neverendingcycle.org/edinburgh.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/rome.JPG",
                "city": "Rome",
                "country": "Italy",
                "link": "https://www.neverendingcycle.org/rome.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/reykjavik.jpeg",
                "city": "Reykjavik",
                "country": "Iceland",
                "link": "https://www.neverendingcycle.org/reykjavik.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/brussels.jpeg",
                "city": "Brussels",
                "country": "Belgium",
                "link": "https://www.neverendingcycle.org/brussels.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/amsterdam.jpeg",
                "city": "Amsterdam",
                "country": "The Netherlands",
                "link": "https://www.neverendingcycle.org/amsterdam.html",
                "mainBody": " "
            },
            {
                "continent": "Europe",
                "image": "/assets/travels/europe/copenhagen.jpeg",
                "city": "Copenhagen",
                "country": "Denmark",
                "link": "https://www.neverendingcycle.org/copenhagen.html",
                "mainBody": " "
            },
            {
                "continent": "Africa/Middle East",
                "image": "/assets/travels/africa/doha.JPG",
                "city": "Doha",
                "country": "Qatar",
                "link": "https://www.neverendingcycle.org/doha.html",
                "mainBody": " "
            },
            {
                "continent": "Africa/Middle East",
                "image": "/assets/travels/africa/capetown.jpeg",
                "city": "Capetown",
                "country": "South Africa",
                "link": "https://www.neverendingcycle.org/cape-town.html",
                "mainBody": " "
            },
            {
                "continent": "Africa/Middle East",
                "image": "/assets/travels/africa/dubai.jpg",
                "city": "Dubai",
                "country": "United Arab Emirates",
                "link": "https://www.neverendingcycle.org/dubai.html",
                "mainBody": " "
            }
        ]
    }

    render () {
        return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <span className="banner"><img src={ process.env.PUBLIC_URL + '/assets/travels/IMG_0026.jpg'} alt="travels-banner" style={{ width:"100%" }}></img></span>
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

                <TravelsItem travels={this.state.travels}/>

            </div>

        </div>
        );
    }
}

export default Travels;
