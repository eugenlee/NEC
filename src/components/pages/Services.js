import React, { Component } from 'react';
import axios from 'axios';


class Services extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          question: '',
        }
      }

      onChangeFirstName(e) {
        this.setState({
          firstName: e.target.value
        })
      }

      onChangeLastName(e) {
        this.setState({
          lastName: e.target.value
        })
      }

      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

      onChangeQuestion(e) {
        this.setState({
          question: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const signup = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          question: this.state.question,
        }
    
        console.log(signup);
    
        axios.post('https://nec-mongodb.herokuapp.com/signup', signup)
          .then(res => {
            console.log(res.data)
            alert('Thank you for signing up!')
          })
          .catch(err => alert(err));
    
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            question: '',
        })
      }
      
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
            <h1 id="q" style={{ color: "black" }}>Questions?</h1>
            <p id="qform">Use the form below, and I will get back to you at the email you provide below</p>
        </div>

        <div id="form-wrapper">
            <p id="req">* Required Field</p>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First Name" 
                            required value={this.state.firstName} onChange={this.onChangeFirstName}/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" 
                            required value={this.state.lastName} onChange={this.onChangeLastName}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" 
                    required value={this.state.email} onChange={this.onChangeEmail}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="questions">Question</label>
                    <input type="text" className="form-control" id="questions" aria-describedby="emailHelp" placeholder="Enter Question"
                    value={this.state.question} onChange={this.onChangeQuestion}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

     </div>
    );
    }
}

export default Services;