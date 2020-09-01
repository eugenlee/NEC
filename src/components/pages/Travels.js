import React, { Component } from 'react';
import jason_bridge from "../../assets/travels/IMG_0026.jpg";
import TravelsItem from './TravelsItem';
import tokyo from "../../assets/travels/asia/tokyo.jpeg";
import guilin from "../../assets/travels/asia/guilin.jpeg";
import hongkong from "../../assets/travels/asia/hongkong.jpg";
import puerto from "../../assets/travels/asia/puerto.jpg";
import singapore from "../../assets/travels/asia/singapore.jpg";
import sydney from "../../assets/travels/asia/sydney.jpg";
import shanghai from "../../assets/travels/asia/shanghai.jpg";
import yilan from "../../assets/travels/asia/yilan.jpg";
import kuala from "../../assets/travels/asia/kuala.jpg";
import seoul from "../../assets/travels/asia/seoul.jpg";
import melbourne from "../../assets/travels/asia/melbourne.jpeg";
import beijing from "../../assets/travels/asia/beijing.jpg";
import tainan from "../../assets/travels/asia/tainan.jpeg";
import hanoi from "../../assets/travels/asia/hanoi.jpeg";

import nyc from "../../assets/travels/americas/nyc.jpeg";
import chi from "../../assets/travels/americas/chi.jpeg";
import portland from "../../assets/travels/americas/portland.jpeg";
import boston from "../../assets/travels/americas/boston.jpeg";
import toronto from "../../assets/travels/americas/toronto.jpeg";
import charlotte from "../../assets/travels/americas/charlotte.jpeg";
import honolulu from "../../assets/travels/americas/honolulu.jpeg";
import jacksonville from "../../assets/travels/americas/jacksonville.jpeg";
import vancouver from "../../assets/travels/americas/vancouver.jpeg";
import minneapolis from "../../assets/travels/americas/minneapolis.jpeg";
import seattle from "../../assets/travels/americas/seattle.jpeg";
import dc from "../../assets/travels/americas/dc.jpeg";

import london from "../../assets/travels/europe/london.jpeg";
import paris from "../../assets/travels/europe/paris.JPG";
import edinburgh from "../../assets/travels/europe/edinburgh.jpeg";
import rome from "../../assets/travels/europe/rome.JPG";
import reykjavik from "../../assets/travels/europe/reykjavik.jpeg";
import brussels from "../../assets/travels/europe/brussels.jpeg";
import amsterdam from "../../assets/travels/europe/amsterdam.jpeg";
import copenhagen from "../../assets/travels/europe/copenhagen.jpeg";

import doha from "../../assets/travels/africa/doha.JPG";
import capetown from "../../assets/travels/africa/capetown.jpeg";
import dubai from "../../assets/travels/africa/dubai.jpg";

class Travels extends Component {
    state = {
        travels: [
            {
                id: 1,
                continent: 'Asia/Oceania',
                image: tokyo,
                city: 'Tokyo',
                country: 'Japan',
                link: 'https://www.neverendingcycle.org/tokyo-osaka.html'
            },
            {
                id: 2,
                continent: 'Asia/Oceania',
                image: guilin,
                city: 'Guilin',
                country: 'China',
                link: 'https://www.neverendingcycle.org/guilin.html'
            },
            {
                id: 3,
                continent: 'Asia/Oceania',
                image: hongkong,
                city: 'Hong Kong',
                country: 'Chinese special administrative region',
                link: '#'
            },
            {
                id: 4,
                continent: 'Asia/Oceania',
                image: puerto,
                city: 'Puerto Princessa',
                country: 'Philippines',
                link: 'https://www.neverendingcycle.org/puerto-princesa.html'
            },
            {
                id: 5,
                continent: 'Asia/Oceania',
                image: singapore,
                city: 'Singapore',
                country: 'Republic of Singapore',
                link: 'https://www.neverendingcycle.org/singapore.html'
            },
            {
                id: 6,
                continent: 'Asia/Oceania',
                image: sydney,
                city: 'Sydney',
                country: 'Australia',
                link: 'https://www.neverendingcycle.org/sydney.html'
            },
            {
                id: 7,
                continent: 'Asia/Oceania',
                image: shanghai,
                city: 'Shanghai',
                country: 'China',
                link: 'https://www.neverendingcycle.org/shanghai.html'
            },
            {
                id: 8,
                continent: 'Asia/Oceania',
                image: yilan,
                city: 'Yilan',
                country: 'Taiwan',
                link: 'https://www.neverendingcycle.org/yilan.html'
            },
            {
                id: 9,
                continent: 'Asia/Oceania',
                image: kuala,
                city: 'Kuala Lumpur',
                country: 'Malaysia',
                link: 'https://www.neverendingcycle.org/kualalumpur.html'
            },
            {
                id: 10,
                continent: 'Asia/Oceania',
                image: seoul,
                city: 'Seoul',
                country: 'South Korea',
                link: 'https://www.neverendingcycle.org/seoul.html'
            },
            {
                id: 11,
                continent: 'Asia/Oceania',
                image: melbourne,
                city: 'Melbourne',
                country: 'Australia',
                link: 'https://www.neverendingcycle.org/melbourne.html'
            },
            {
                id: 12,
                continent: 'Asia/Oceania',
                image: beijing,
                city: 'Beijing',
                country: 'China',
                link: 'https://www.neverendingcycle.org/beijing.html'
            },
            {
                id: 13,
                continent: 'Asia/Oceania',
                image: tainan,
                city: 'Tainan',
                country: 'Taiwan',
                link: 'https://www.neverendingcycle.org/tainan.html'
            },
            {
                id: 14,
                continent: 'Asia/Oceania',
                image: hanoi,
                city: 'Hanoi',
                country: 'Vietnam',
                link: 'https://www.neverendingcycle.org/hanoi.html'
            },
            {
                id: 15,
                continent: 'The Americas',
                image: nyc,
                city: 'New York City',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/new-york-city.html'
            },
            {
                id: 16,
                continent: 'The Americas',
                image: chi,
                city: 'Chicago',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/chicago.html'
            },
            {
                id: 17,
                continent: 'The Americas',
                image: portland,
                city: 'Portland',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/portland.html'
            },
            {
                id: 18,
                continent: 'The Americas',
                image: boston,
                city: 'Boston',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/boston.html'
            },
            {
                id: 19,
                continent: 'The Americas',
                image: toronto,
                city: 'Toronto',
                country: 'Canada',
                link: '#'
            },
            {
                id: 20,
                continent: 'The Americas',
                image: charlotte,
                city: 'Charlotte',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/charlotte.html'
            },
            {
                id: 21,
                continent: 'The Americas',
                image: honolulu,
                city: 'Honolulu',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/honolulu.html'
            },
            {
                id: 22,
                continent: 'The Americas',
                image: jacksonville,
                city: 'Jacksonville',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/jacksonville.html'
            },
            {
                id: 23,
                continent: 'The Americas',
                image: vancouver,
                city: 'Vancouver',
                country: 'Canada',
                link: 'https://www.neverendingcycle.org/vancouver.html'
            },
            {
                id: 24,
                continent: 'The Americas',
                image: minneapolis,
                city: 'Minneapolis',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/minneapolis.html'
            },
            {
                id: 25,
                continent: 'The Americas',
                image: seattle,
                city: 'Seattle',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/seattle.html'
            },
            {
                id: 26,
                continent: 'The Americas',
                image: dc,
                city: 'Washington DC',
                country: 'United States',
                link: 'https://www.neverendingcycle.org/washingtondc.html'
            },
            {
                id: 27,
                continent: 'Europe',
                image: london,
                city: 'London',
                country: 'United Kingdom',
                link: 'https://www.neverendingcycle.org/london.html'
            },
            {
                id: 28,
                continent: 'Europe',
                image: paris,
                city: 'Paris',
                country: 'France',
                link: 'https://www.neverendingcycle.org/paris.html'
            },
            {
                id: 29,
                continent: 'Europe',
                image: edinburgh,
                city: 'Edinburgh',
                country: 'Scotland',
                link: 'https://www.neverendingcycle.org/edinburgh.html'
            },
            {
                id: 30,
                continent: 'Europe',
                image: rome,
                city: 'Rome',
                country: 'Italy',
                link: 'https://www.neverendingcycle.org/rome.html'
            },
            {
                id: 31,
                continent: 'Europe',
                image: reykjavik,
                city: 'Reykjavik',
                country: 'Iceland',
                link: 'https://www.neverendingcycle.org/reykjavik.html'
            },
            {
                id: 32,
                continent: 'Europe',
                image: brussels,
                city: 'Brussels',
                country: 'Belgium',
                link: 'https://www.neverendingcycle.org/brussels.html'
            },
            {
                id: 33,
                continent: 'Europe',
                image: amsterdam,
                city: 'Amsterdam',
                country: 'The Netherlands',
                link: 'https://www.neverendingcycle.org/amsterdam.html'
            },
            {
                id: 34,
                continent: 'Europe',
                image: copenhagen,
                city: 'Copenhagen',
                country: 'Denmark',
                link: 'https://www.neverendingcycle.org/copenhagen.html'
            },
            {
                id: 35,
                continent: 'Africa/Middle East',
                image: doha,
                city: 'Doha',
                country: 'Qatar',
                link: 'https://www.neverendingcycle.org/doha.html'
            },
            {
                id: 36,
                continent: 'Africa/Middle East',
                image: capetown,
                city: 'Capetown',
                country: 'South Africa',
                link: 'https://www.neverendingcycle.org/cape-town.html'
            },
            {
                id: 37,
                continent: 'Africa/Middle East',
                image: dubai,
                city: 'Dubai',
                country: 'United Arab Emirates',
                link: 'https://www.neverendingcycle.org/dubai.html'
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

                <TravelsItem travels={this.state.travels}/>

            </div>

        </div>
        );
    }
}

export default Travels;
