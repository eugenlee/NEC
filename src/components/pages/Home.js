import React from 'react';
import home_banner from "../../assets/home/home_banner.jpg"
import home_one from "../../assets/home/home_one.jpg"
import home_two from "../../assets/home/home_two.jpg"
import home_three from "../../assets/home/home_three.jpg"

function Home() {
    return (
        <div>
         <div className="container-fluid">
            <div className="row">
                <span className="banner"><img src={home_banner} style={{width: "100%"}} alt="home-banner"></img></span>
                <h1 style={{textAlign: "center", position: "absolute" }}>Welcome</h1>
            </div>
         </div>

        <div className="container">

            <div className="row mb-5">
                <div className="col-lg-6">
                    <img className="rounded mx-auto d-block" src={home_one} alt="mountains"></img>
                </div>
                <div className="col-lg-6 align-self-center">
                    <p style={{textAlign: "center"}}>
                        <span className="title">Definition of: never ending cycle</span>
                        <span style={{fontStyle: "italic"}}>nev·er / end·ing / cy·cle</span>
                        <br/>
                        <span className="main_text ml-3 mr-3">1. At no time in the past or future where the furthest part of a series of events that are regularly repeated ever ends.</span>
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6 align-self-center">
                    <p style={{textAlign: "center"}}>
                        <span className="title">Mission</span>
                        <span className="main_text ml-3 mr-3">Time is the world's most valuable resource - life is too short to have regrets. Traveling allows you to spend time with people you love and to improve upon yourself. The goal of this website is to help you gain a better understanding of how you could integrate travel into your lifestyle, no matter where you are in life.</span>
                    </p>
                </div>
                <div className="col-lg-6">
                    <img className="rounded mx-auto d-block" src={home_two} style={{width:"90%"}} alt="sf bridge"></img>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6">
                    <img className="rounded mx-auto d-block" src={home_three} style={{width:"90%"}} alt="graduation"></img>
                </div>
                <div className="col-lg-6 align-self-center">
                    <p style={{textAlign: "center"}}>
                        <span className="title">Forward</span>
                        <span className="main_text ml-3 mr-3">Join me on my adventures as I navigate working full-time, learning new skills, and making new friends and experiences along the way!</span>
                    </p>
                </div>
            </div>

         </div>
         </div>
    );
}

export default Home;
