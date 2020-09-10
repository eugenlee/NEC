import React, { Component } from 'react';
import axios from 'axios';

export default class TravelsCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeContinent = this.onChangeContinent.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      continent: '',
      image: '',
      city: '',
      country: '',
      link: '',
    }
  }

  onChangeContinent(e) {
    this.setState({
      continent: e.target.value
    })
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const travel = {
      continent: this.state.continent,
      image: this.state.image,
      city: this.state.city,
      country: this.state.country,
      link: this.state.link,
    }

    console.log(travel);

    axios.post('http://localhost:5000/travels/add', travel)
      .then(res => console.log(res.data));

    this.setState({
        continent: '',
        image: '',
        city: '',
        country: '',
        link: ''
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Create New Travels Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Continent: </label>
            <select type="text"
                required
                className="form-control"
                value={this.state.continent}
                onChange={this.onChangeContinent}>
                <option value="Not Selected">Not Selected</option>
                <option value="Asia/Oceania">Asia/Oceania</option>
                <option value="The Americas">The Americas</option>
                <option value="Europe">Europe</option>
                <option value="Africa/Middle East">Africa/Middle East</option>
            </select>
            <label>Country: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="What Country?"
                value={this.state.country}
                onChange={this.onChangeCountry}
                />
            <label>City: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="What City?"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
            <label>Image Path: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Default is /assets/travels/square.png"
                value={this.state.image}
                onChange={this.onChangeImage}
                />
            <label>Link: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder="Notion link"
                value={this.state.link}
                onChange={this.onChangeLink}
                />      
          </div>
          <div className="form-group">
            <input type="submit" value="Create Travel" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}