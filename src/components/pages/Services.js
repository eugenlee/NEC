import React from 'react';
import services_table from "../../assets/TravelConsultPkgChart_v5.png";

function Services() {
    return (
        <div className="container">

        <div className="row">
            <div className="title">
                <span className="col-sm-12">Travel Consulting Service</span>
            </div>
        </div>

        <div className="row">
            <div style={{ position: "relative", display: "flex", top: "16px", marginBottom: "16px" }} className="main_text">
                <div className="col-sm-12">
                    An all-inclusive, personalized travel consultant service could be right at your fingertips. I have gained a wealth of experience from solo traveling all over the world and my service puts all that experience at your disposal. In addition, I also have extensive experience planning vacations in a cost-saving manner by achieving the perfect balance between best value and maximum enjoyment on your vacation. If you are trying to plan a vacation and you're completely lost on:<br/>
                    <br/>
                    <ul>• &nbsp; How to plan</ul>
                    <ul>• &nbsp; How to budget</ul>
                    <ul>• &nbsp; How to make friends abroad</ul>
                    <ul>• &nbsp; How to accumulate mileage</ul>
                    <ul>• &nbsp; And other relevant questions</ul>

                    You have come to the right place. I would love to help you achieve your travel goals, and I hope to collaborate with you soon!
                </div>
            </div>
        </div>


            <img src={services_table} alt="services_table" style={{ width:"100%", padding: "5%"}}></img>


        <div id="questions?">
            <h1 id="q" style={{ color: "black" }}>Questions?</h1>
            <p id="qform">Use the form below, and I will get back to you at the email you provide below</p>
        </div>

        <div id="form-wrapper">
            <p id="req">* Required Field</p>
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First Name" required></input>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required></input>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="questions">Question</label>
                    <input type="text" className="form-control" id="questions" aria-describedby="emailHelp" placeholder="Enter Question"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

     </div>
    );
}

export default Services;