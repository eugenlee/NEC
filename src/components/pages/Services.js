import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';


class Services extends Component {
    render () {
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


            <img src={ process.env.PUBLIC_URL + '/assets/TravelConsultPkgChart_v5.png' } alt="services_table" style={{ width:"100%", padding: "5%"}}></img>


        <div id="questions?">
            <h1 id="q" style={{ color: "black" }}>Newsletter</h1>
            <p id="qform">Subscribe to my newsletter for travel tips and guides!</p>
        </div>

        <div id="form-wrapper">
          <Mailchimp
            action='https://neverendingcycle.us17.list-manage.com/subscribe/post?u=ba2ce2d903727946d9203b1af&amp;id=efae2ade1d' 
            
            //Adding multiple fields:
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true
              },
              {
                name: 'FNAME',
                placeholder: 'name',
                type: 'text',
                required: true
              }
            ]}
            // Change predetermined language
            messages = {
              {
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must provide an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe!"
              }
            }
          />
        </div>

     </div>
    );
    }
}

export default Services;